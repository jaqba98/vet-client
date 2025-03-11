import { CommonModule } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { faBackward, faBackwardFast, faForward, faForwardFast } from '@fortawesome/free-solid-svg-icons'
import { combineLatest, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ControlButtonModel } from '@vet-client/lib-base-form'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { TableFormRowsModel } from '../model/table-form-rows.model'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'
import { ColorType } from '@vet-client/lib-type'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent<TData> implements OnInit, OnDestroy {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  readonly first: ControlButtonModel = {
    id: 'first',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faBackwardFast, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
    width40px: true,
  }

  readonly previous: ControlButtonModel = {
    id: 'previous',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faBackward, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
    width40px: true,
  }

  readonly next: ControlButtonModel = {
    id: 'next',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faForward, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
    width40px: true,
  }

  readonly last: ControlButtonModel = {
    id: 'last',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faForwardFast, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
    width40px: false,
  }

  page!: number

  maxPage!: number

  private sub: Subscription

  constructor(private route: ActivatedRoute) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.route.paramMap.subscribe((paramMap) => {
        const page = Number(paramMap.get('page'))
        if (page) {
          this.store.setPage(page)
        }
      }),
    )
    combineLatest([this.store.rows$, this.store.page$]).subscribe(
      ([rows, page]) => {
        const maxPage = Math.ceil(rows.length / NUMBER_OF_ROWS_PER_PAGE)
        this.page = page
        this.maxPage = maxPage
      },
    )
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
