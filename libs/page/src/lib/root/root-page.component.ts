import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { RouteStoreType } from '@vet-client/lib-store';
import { RouterService } from '@vet-client/lib-system';

@Component({
  selector: 'lib-root-page',
  imports: [RouterModule],
  templateUrl: './root-page.component.html',
})
export class RootPageComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private readonly store: Store<RouteStoreType>,
    private readonly router: RouterService
  ) {}

  ngOnInit() {
    this.sub = this.store
      .select('route')
      .subscribe((route) => this.router.navigate(route.page, route.section));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
