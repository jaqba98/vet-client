import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  SectionControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { AccountStoreType, RouteSectionEnum } from '@vet-client/lib-store';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-client-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './client-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientViewComponent implements OnInit, OnDestroy {
  sectionId = RouteSectionEnum.dashboardClient;

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
