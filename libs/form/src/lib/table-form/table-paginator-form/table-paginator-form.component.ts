// done
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
} from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import {
  BaseFormBuilder,
  ControlButtonModel,
} from '@vet-client/lib-base-form'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent {
  @Output() tablePaginatorOnInitEvent = new EventEmitter()
  @Output() tablePaginatorEvent = new EventEmitter<number>()

  @Input({ required: true }) page!: number
  @Input({ required: true }) maxPage!: number

  readonly first: ControlButtonModel
  readonly previous: ControlButtonModel
  readonly next: ControlButtonModel
  readonly last: ControlButtonModel

  constructor(
    private readonly controlButton: BaseFormBuilder,
    private baseForm: BaseFormBuilder,
  ) {
    this.first = <ControlButtonModel> this.baseForm
      .buildButtonIcon('first', faBackwardFast, 'dark-secondary')
      .build()
    this.previous = <ControlButtonModel> this.baseForm
      .buildButtonIcon('previous', faBackward, 'dark-secondary')
      .build()
    this.next = <ControlButtonModel> this.baseForm
      .buildButtonIcon('next', faForward, 'dark-secondary')
      .build()
    this.last = <ControlButtonModel> this.baseForm
      .buildButtonIcon('last', faForwardFast, 'dark-secondary')
      .build()
  }

  onFirstPageEvent() {
    if (this.page !== 1) {
      this.tablePaginatorEvent.emit(1)
    }
  }

  onPreviousPageEvent() {
    if (this.page > 1) {
      this.tablePaginatorEvent.emit(this.page - 1)
    }
  }

  onSpecificPageEvent(id: string) {
    if (this.page >= 1 && this.page <= this.maxPage) {
      this.tablePaginatorEvent.emit(Number(id))
    }
  }

  onNextPageEvent() {
    if (this.page < this.maxPage) {
      this.tablePaginatorEvent.emit(this.page + 1)
    }
  }

  onLastPageEvent() {
    if (this.page !== this.maxPage) {
      this.tablePaginatorEvent.emit(this.maxPage)
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
    const sortedPages = Array.from(pages).sort()
    sortedPages.forEach((index: number) => {
      const id = index.toString()
      if (index === this.page) {
        const control = <ControlButtonModel> this.baseForm
          .buildButton(id, id, 'primary')
          .build()
        controls.push(control)
      }
      else {
        const control = <ControlButtonModel> this.baseForm
          .buildButton(id, id, 'dark-secondary')
          .build()
        controls.push(control)
      }
    })
    return controls
  }
}
