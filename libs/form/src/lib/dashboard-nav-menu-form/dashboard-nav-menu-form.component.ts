import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreType,
  setRoute
} from '@vet-client/lib-store';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  DashboardNavMenuFormModel,
  DashboardNavMenuModel,
} from './dashboard-nav-menu-form.model';

@Component({
  selector: 'lib-dashboard-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class DashboardNavMenuFormComponent extends BaseFormService<
  DashboardNavMenuFormModel,
  DashboardNavMenuModel
> {
  @Input() isHorizontal = true;

  constructor(private readonly store: Store<RouteStoreType>) {
    super({
      dashboard: {
        kind: 'button',
        id: 'dashboard',
        value: {
          type: 'text',
          text: 'Dashboard',
        },
        defaultValue: false,
        fullWidth: true
      },
      accountSettings: {
        kind: 'button',
        id: 'accountSettings',
        value: {
          type: 'text',
          text: 'Account Settings',
        },
        defaultValue: false,
        fullWidth: true
      },
      profile: {
        kind: 'button',
        id: 'profile',
        value: {
          type: 'text',
          text: 'Profile',
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: DashboardNavMenuModel) {
    if (model.dashboard) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboard,
          section: RouteSectionEnum.dashboard,
        })
      );
    } else if (model.accountSettings) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardAccountSettings,
          section: RouteSectionEnum.empty,
        })
      );
    } else if (model.profile) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardProfile,
          section: RouteSectionEnum.empty,
        })
      );
    }
  }
}
