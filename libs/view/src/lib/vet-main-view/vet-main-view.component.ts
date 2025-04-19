import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import {
  TextControlComponent,
} from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { AccountStoreType, RouteSectionEnum } from '@vet-client/lib-store'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-main-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './vet-main-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMainViewComponent implements OnInit, OnDestroy {
  sectionId = RouteSectionEnum.dashboardVet

  firstName = ''

  lastName = ''

  private readonly sub: Subscription

  constructor(private readonly store: Store<AccountStoreType>) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.store.select('account').subscribe((account) => {
        this.firstName = account.firstName
        this.lastName = account.lastName
      }),
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
