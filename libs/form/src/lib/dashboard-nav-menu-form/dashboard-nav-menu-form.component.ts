import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { DashboardNavMenuDomainModel, DashboardNavMenuFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-dashboard-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class DashboardNavMenuFormComponent
  extends BaseFormService<
    DashboardNavMenuFormModel,
    DashboardNavMenuDomainModel
  >
  implements OnInit, OnDestroy {
  @Input() isHorizontal = true

  constructor(
    private store: Store<RouteStoreType>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      dashboard: this.baseForm
        .buildButton('dashboard', 'Dashboard', 'primary')
        .build(),
      accountSettings: this.baseForm
        .buildButton('accountSettings', 'Account Settings', 'primary')
        .build(),
      profile: this.baseForm
        .buildButton('profile', 'Profile', 'primary')
        .build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: DashboardNavMenuDomainModel) {
    if (domain.dashboard) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboard,
          section: RouteSectionEnum.dashboard,
        }),
      )
    }
    else if (domain.accountSettings) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardAccountSettings,
          section: RouteSectionEnum.empty,
        }),
      )
    }
    else if (domain.profile) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardProfile,
          section: RouteSectionEnum.empty,
        }),
      )
    }
  }
}
