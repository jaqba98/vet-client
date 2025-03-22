import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreType,
  routeSetAction,
} from '@vet-client/lib-store'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  DashboardNavMenuFormModel,
  DashboardNavMenuModel,
} from './dashboard-nav-menu-form.model'

@Component({
  selector: 'lib-dashboard-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class DashboardNavMenuFormComponent
  extends BaseFormService<DashboardNavMenuFormModel, DashboardNavMenuModel>
  implements OnInit {
  @Input() isHorizontal = true

  constructor(
    private store: Store<RouteStoreType>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      dashboard: this.baseForm.buildButton('dashboard', 'Dashboard', 'primary').build(),
      accountSettings: this.baseForm.buildButton('accountSettings', 'Account Settings', 'primary').build(),
      profile: this.baseForm.buildButton('profile', 'Profile', 'primary').build(),
    })
  }

  override onSubmit(model: DashboardNavMenuModel) {
    if (model.dashboard) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboard,
          section: RouteSectionEnum.dashboard,
        }),
      )
    }
    else if (model.accountSettings) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardAccountSettings,
          section: RouteSectionEnum.empty,
        }),
      )
    }
    else if (model.profile) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardProfile,
          section: RouteSectionEnum.empty,
        }),
      )
    }
  }
}
