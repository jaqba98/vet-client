import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
} from '@fortawesome/free-solid-svg-icons'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { ActionTypeEnum, baseTableFormPageAction, BaseTableFormStoreModel } from '@vet-client/lib-store'
import { TableFormStoreModel } from '../model/table-form-store.model'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent<TDomainModel, TMetadata> implements OnInit, OnDestroy {
  @Input({ required: true }) store!: Store<TableFormStoreModel>
  @Input({ required: true }) select!: string
  @Input({ required: true }) path!: string
  @Input({ required: true }) name!: ActionTypeEnum

  page!: number
  maxPage!: number

  readonly first: ControlButtonModel
  readonly previous: ControlButtonModel
  readonly next: ControlButtonModel
  readonly last: ControlButtonModel

  private readonly sub: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private baseForm: BaseFormBuilder,
  ) {
    this.sub = new Subscription()
    this.first = this.baseForm
      .buildButtonIcon('first', faBackwardFast, 'dark-secondary')
      .build()
    this.previous = this.baseForm
      .buildButtonIcon('previous', faBackward, 'dark-secondary')
      .build()
    this.next = this.baseForm
      .buildButtonIcon('next', faForward, 'dark-secondary')
      .build()
    this.last = this.baseForm
      .buildButtonIcon('last', faForwardFast, 'dark-secondary')
      .build()
  }

  ngOnInit() {
    this.sub.add(this.route.paramMap.subscribe(async (paramMap) => {
      const page = Number(paramMap.get('page'))
      if (page) {
        this.store.dispatch(baseTableFormPageAction(this.name)({ page }))
      }
      else {
        await this.router.navigate([`${this.path}/1`])
        this.store.dispatch(baseTableFormPageAction(this.name)({ page: 1 }))
      }
    }))
    this.sub.add(this.store.select(this.select).subscribe(async (data: BaseTableFormStoreModel<TDomainModel, TMetadata>) => {
      this.page = data.page
      this.maxPage = data.maxPage
      if (this.page < 1) {
        await this.router.navigate([`${this.path}/1`])
      }
      else if (this.page > this.maxPage) {
        await this.router.navigate([`${this.path}/${this.maxPage}`])
      }
      else {
        await this.router.navigate([`${this.path}/${this.page}`])
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onFirstPageEvent() {
    if (this.page !== 1) {
      this.store.dispatch(baseTableFormPageAction(this.name)({ page: 1 }))
    }
  }

  onPreviousPageEvent() {
    if (this.page > 1) {
      this.store.dispatch(baseTableFormPageAction(this.name)({ page: this.page - 1 }))
    }
  }

  onSpecificPageEvent(id: string) {
    if (this.page >= 1 && this.page <= this.maxPage) {
      this.store.dispatch(baseTableFormPageAction(this.name)({ page: Number(id) }))
    }
  }

  onNextPageEvent() {
    if (this.page < this.maxPage) {
      this.store.dispatch(baseTableFormPageAction(this.name)({ page: this.page + 1 }))
    }
  }

  onLastPageEvent() {
    if (this.page !== this.maxPage) {
      this.store.dispatch(baseTableFormPageAction(this.name)({ page: this.maxPage }))
    }
  }

  getPageControls() {
    const controls: ControlButtonModel[] = []
    const pages = new Set<number>()
    pages.add(this.page)
    for (let i = 1; i <= 2; i++) {
      if (this.page - i > 0) pages.add(this.page - i)
    }
    for (let i = 1; i <= 2; i++) {
      if (this.page + i <= this.maxPage) pages.add(this.page + i)
    }
    while (pages.size < 5) {
      if (Math.min(...pages) > 1) {
        pages.add(Math.min(...pages) - 1)
      }
      else if (Math.max(...pages) < this.maxPage) {
        pages.add(Math.max(...pages) + 1)
      }
      else {
        break
      }
    }
    const sortedPages = Array.from(pages).sort((a, b) => a - b)
    sortedPages.forEach((index: number) => {
      const id = index.toString()
      if (index === this.page) {
        const control = <ControlButtonModel>(
          this.baseForm.buildButton(id, id, 'primary').build()
        )
        controls.push(control)
      }
      else {
        const control = <ControlButtonModel>(
          this.baseForm.buildButton(id, id, 'dark-secondary').build()
        )
        controls.push(control)
      }
    })
    return controls
  }
}
