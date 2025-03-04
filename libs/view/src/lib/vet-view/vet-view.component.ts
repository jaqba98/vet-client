import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
  SectionControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { AccountStoreType, RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-vet-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './vet-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetViewComponent implements OnInit, OnDestroy {
  sectionId = RouteSectionEnum.dashboardVet;

  firstName = '';

  lastName = '';

  private readonly sub: Subscription;

  constructor(private readonly store: Store<AccountStoreType>) {
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.sub.add(
      this.store.select('account').subscribe(account => {
        this.firstName = account.firstName;
        this.lastName = account.lastName;
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
