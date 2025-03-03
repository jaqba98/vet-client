import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { RouteStoreType } from '@vet-client/lib-store';
import { RouterService } from '@vet-client/lib-system';
import { FooterViewComponent, MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import {
  BigLoginRegistrationFormComponent,
  HomeNavMenuFormComponent,
  SmallLoginRegistrationFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-root-page',
  imports: [
    RouterModule,
    FooterViewComponent,
    BigLoginRegistrationFormComponent,
    NavViewComponent,
    HomeNavMenuFormComponent,
    SmallLoginRegistrationFormComponent,
    MainViewComponent,
  ],
  templateUrl: './root-page.component.html',
})
export class RootPageComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private readonly store: Store<RouteStoreType>,
    private readonly router: RouterService
  ) {
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.sub.add(
      this.store
        .select('route')
        .subscribe((route) => this.router.navigate(route.page, route.section))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
