import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
} from '@fortawesome/free-solid-svg-icons'
import { combineLatest, Subscription } from 'rxjs'
import { CommonModule } from '@angular/common'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ControlButtonModel } from '@vet-client/lib-base-form'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'

@Component({
  selector: 'lib-table-paginator-form',
  imports: [ButtonControlComponent, CommonModule, TextControlComponent],
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePaginatorFormComponent<TData> implements OnInit, OnDestroy {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

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

  currPage!: number

  maxPage!: number

  private sub!: Subscription

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      const page = Number(params.get('page'))
      if (page) this.store.setPage(page)
    })
    combineLatest([this.store.rows$, this.store.page$]).subscribe(
      ([rows, page]) => {
        this.currPage = page
        this.maxPage = rows.length / NUMBER_OF_ROWS_PER_PAGE
        console.log(rows.length, NUMBER_OF_ROWS_PER_PAGE)
      },
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
