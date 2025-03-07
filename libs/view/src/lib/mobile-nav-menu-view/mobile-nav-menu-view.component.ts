import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { MenuTypeEnum, NavStoreType } from '@vet-client/lib-store'
import { DashboardNavMenuFormComponent, HomeNavMenuFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-mobile-nav-menu-view',
  imports: [
    CommonModule,
    DashboardNavMenuFormComponent,
    HomeNavMenuFormComponent,
  ],
  templateUrl: './mobile-nav-menu-view.component.html',
  styleUrl: './mobile-nav-menu-view.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class MobileNavMenuViewComponent implements OnInit, OnDestroy {
  menuType!: MenuTypeEnum

  isOpen = false

  private readonly sub: Subscription

  constructor(private readonly store: Store<NavStoreType>) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.store.select('nav').subscribe((nav) => {
        this.isOpen = nav.isOpen
        this.menuType = nav.menuType
      }),
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
