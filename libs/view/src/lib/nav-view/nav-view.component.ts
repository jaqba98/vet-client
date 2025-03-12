import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { MenuTypeEnum, NavStoreType } from '@vet-client/lib-store'
import {
  BigLoginRegistrationFormComponent,
  DashboardNavMenuFormComponent,
  HamburgerFormComponent,
  HomeNavMenuFormComponent, LogoutFormComponent,
  SmallLoginRegistrationFormComponent,
} from '@vet-client/lib-form'
import { SmallLogoControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-nav-view',
  imports: [
    CommonModule,
    HamburgerFormComponent,
    SmallLogoControlComponent,
    HomeNavMenuFormComponent,
    DashboardNavMenuFormComponent,
    SmallLoginRegistrationFormComponent,
    BigLoginRegistrationFormComponent,
    LogoutFormComponent,
  ],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class NavViewComponent implements OnInit, OnDestroy {
  menuType!: MenuTypeEnum

  sub: Subscription

  constructor(private readonly navStore: Store<NavStoreType>) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub = this.navStore.select('nav').subscribe((nav) => {
      this.menuType = nav.menuType
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
