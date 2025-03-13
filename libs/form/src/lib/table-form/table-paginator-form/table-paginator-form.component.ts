// done
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faBackward, faBackwardFast, faForward, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ControlButtonBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
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

  readonly first: ControlButtonModel
  readonly previous: ControlButtonModel
  readonly next: ControlButtonModel
  readonly last: ControlButtonModel

  page = 0

  maxPage = 0

  private readonly sub: Subscription

  constructor(
    private readonly route: ActivatedRoute,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.sub = new Subscription()
    this.first = this.controlButton
      .buildBase('first')
      .buildIsSquare(true)
      .buildIcon(faBackwardFast, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.previous = this.controlButton
      .buildBase('previous')
      .buildIsSquare(true)
      .buildIcon(faBackward, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.next = this.controlButton
      .buildBase('next')
      .buildIsSquare(true)
      .buildIcon(faForward, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
    this.last = this.controlButton
      .buildBase('last')
      .buildIsSquare(true)
      .buildIcon(faForwardFast, 'light-primary', '1rem')
      .buildColor('dark-secondary')
      .build()
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
      const control = this.controlButton
        .buildBase(id)
        .buildIsSquare(true)
        .buildText(id)
      if (index === this.page) {
        controls.push(control.buildColor('primary').build())
      }
      else {
        controls.push(control.buildColor('dark-secondary').build())
      }
    })
    return controls
  }
}
