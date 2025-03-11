import { Component, Input, OnInit } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { ActivatedRoute } from '@angular/router'
import { ButtonControlComponent } from '@vet-client/lib-control'
import { ControlButtonModel } from '@vet-client/lib-base-form'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'lib-table-paginator-form',
  templateUrl: './table-paginator-form.component.html',
  styleUrl: './table-paginator-form.component.scss',
  hostDirectives: [BaseComponentDirective],
  imports: [ButtonControlComponent],
})
export class TablePaginatorFormComponent<TData> implements OnInit {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  readonly left: ControlButtonModel = {
    id: 'left',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faArrowLeft, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
  }

  readonly right: ControlButtonModel = {
    id: 'left',
    kind: 'button',
    value: {
      type: 'icon',
      icon: { icon: faArrowRight, color: 'light-primary', fontSize: '1rem' },
    },
    defaultValue: false,
    color: 'dark-secondary',
    fullWidth: false,
    isEnabled: true,
  }

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const page = Number(params.get('page'))
      if (page) this.store.setPage(page)
    })
  }
}
