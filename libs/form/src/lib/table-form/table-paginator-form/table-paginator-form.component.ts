import { CommonModule } from '@angular/common'
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
} from '@fortawesome/free-solid-svg-icons'
import { combineLatest, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import {
  ButtonControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'
import { ColorType } from '@vet-client/lib-type'

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

  private readonly sub = new Subscription()

  page!: number

  maxPage!: number

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub.add(this.route.paramMap.subscribe((params) => {
      const page = params.get('page')
      if (page) {
        this.store.setPage(Number(page))
      }
    }))
    this.sub.add(combineLatest([this.store.rows$, this.store.page$]).subscribe(([rows, page]) => {
      const maxPage = Math.ceil(rows.length / NUMBER_OF_ROWS_PER_PAGE)
      this.page = page
      this.maxPage = maxPage
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
    const sortedPages = Array.from(pages).sort((a: number, b: number) => a - b)
    sortedPages.forEach((i: number) => {
      controls.push(this.buildPageControl(i, i === this.page ? 'primary' : 'dark-secondary'))
    })
    return controls
  }

  private buildPageControl(id: number, color: ColorType): ControlButtonModel {
    return {
      id: id.toString(),
      kind: 'button',
      value: {
        type: 'text',
        text: id.toString(),
      },
      defaultValue: false,
      color,
      fullWidth: false,
      isEnabled: true,
      width40px: true,
    }
  }
}
