// done
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faBackward, faBackwardFast, faForward, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent<TStore> implements OnInit, OnDestroy {
  @Input({ required: true }) store!: BaseTableFormStore<TStore>

  readonly first = BaseFormBuilder.buildButtonIcon('first', faBackwardFast, 'dark-secondary', true)
  readonly previous = BaseFormBuilder.buildButtonIcon('previous', faBackward, 'dark-secondary', true)
  readonly next = BaseFormBuilder.buildButtonIcon('next', faForward, 'dark-secondary', true)
  readonly last = BaseFormBuilder.buildButtonIcon('last', faForwardFast, 'dark-secondary', true)

  page = 0

  maxPage = 0

  private readonly sub: Subscription

  constructor(private readonly route: ActivatedRoute) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.route.paramMap.subscribe((param) => {
      const page = Number(param.get('page'))
      if (page) this.store.setPage(page)
    }))
    this.sub.add(this.store.page$.subscribe((page) => {
      this.page = page
    }))
    this.sub.add(this.store.rows$.subscribe((rows) => {
      this.maxPage = Math.ceil(rows.length / NUMBER_OF_ROWS_PER_PAGE)
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
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
    const sortedPages = Array.from(pages).sort()
    sortedPages.forEach((index: number) => {
      const id = index.toString()
      if (index === this.page) {
        controls.push(BaseFormBuilder.buildButtonText(id, id, 'primary', true, true))
      }
      else {
        controls.push(BaseFormBuilder.buildButtonText(id, id, 'dark-secondary', true, true))
      }
    })
    return controls
  }
}
