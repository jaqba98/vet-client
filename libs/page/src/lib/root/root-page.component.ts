import { Component, OnDestroy, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Store } from '@ngrx/store'

import { HttpComponent } from '@vet-client/lib-http'
import {
  FooterViewComponent,
  MainViewComponent,
  MobileNavMenuViewComponent,
  NavViewComponent,
} from '@vet-client/lib-view'
import { BaseComponent } from '@vet-client/lib-utils'
import { NavStoreType, RouteStoreType } from '@vet-client/lib-store'
import { RouterService } from '@vet-client/lib-system'

@Component({
  selector: 'lib-root-page',
  imports: [
    HttpComponent,
    NavViewComponent,
    MainViewComponent,
    FooterViewComponent,
    MobileNavMenuViewComponent,
    RouterOutlet,
  ],
  template: `
    <lib-http></lib-http>
    <lib-nav-view></lib-nav-view>
    <lib-main-view>
      <router-outlet></router-outlet>
    </lib-main-view>
    <lib-footer-view></lib-footer-view>
    <lib-mobile-nav-menu-view></lib-mobile-nav-menu-view>
  `,
})
export class RootPageComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(
    private readonly storeRoute: Store<RouteStoreType>,
    private readonly storeNav: Store<NavStoreType>,
    private readonly router: RouterService,
  ) {
    super()
  }

  ngOnInit() {
    this.initSubscription()
    this.addSubscription(this.storeRoute.select('route')
      .subscribe(route => this.router.navigate(route.page, route.section)))
    this.addSubscription(this.storeNav.select('nav')
      .subscribe(nav => document.body.style.overflow = nav.isOpen ? 'hidden' : 'auto'))
  }

  ngOnDestroy() {
    this.removeSubscriptions()
  }
}
