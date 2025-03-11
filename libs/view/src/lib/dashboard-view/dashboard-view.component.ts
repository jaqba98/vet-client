import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { RouterOutlet } from '@angular/router'
import { take } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import {
  navDashboardNavIsOpen,
  NavStoreModel,
  NavStoreType,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-dashboard-view',
  imports: [CommonModule, ButtonControlComponent, RouterOutlet],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class DashboardViewComponent {
  isOpen = false

  hamburgerModel: ButtonControlModel = {
    id: 'hamburger',
    value: {
      type: 'icon',
      icon: {
        icon: faBars,
        color: 'light-primary',
        fontSize: '1rem',
      },
    },
    fullWidth: false,
    color: 'primary',
    width40px: false,
  }

  constructor(private readonly store: Store<NavStoreType>) {}

  onClick() {
    this.store
      .select('nav')
      .pipe(take(1))
      .subscribe((state: NavStoreModel) => {
        this.store.dispatch(
          navDashboardNavIsOpen({
            dashboardNavIsOpen: !state.dashboardNavIsOpen,
          }),
        )
        this.isOpen = !state.dashboardNavIsOpen
      })
  }

  getMenuClassList() {
    return this.isOpen
      ? 'dashboard-view__menu--open'
      : 'dashboard-view__menu--close'
  }

  getMenuContentClassList() {
    return this.isOpen
      ? 'dashboard-view__menu--content--open'
      : 'dashboard-view__menu--content--close'
  }

  getContentClassList() {
    return this.isOpen
      ? 'dashboard-view__content--open'
      : 'dashboard-view__content--close'
  }
}
