import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CookieService,
  RouterService
} from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ChooseRoleFormDataModel, ChooseRoleFormModel } from './choose-role-form.model';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-choose-role-form',
  imports: [CommonModule ,BaseFormComponent, CardControlComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent extends BaseFormService<ChooseRoleFormModel, ChooseRoleFormDataModel> {
  constructor(
    private readonly store: Store<RouteStoreModel>,
    private readonly http: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly router: RouterService
  ) {
    super({
      role: {
        kind: 'radio-button',
        name: 'role',
        options: [
          { id: 'vet', value: 'Vet' },
          { id: 'client', value: 'Client' }
        ],
        defaultValue: 'vet'
      },
      save: {
        kind: 'button',
        defaultValue: false,
        id: 'save',
        value: {
          type: 'text',
          text: 'Save',
        },
        fullWidth: false
      },
    });
  }

  override onSubmit(model: ChooseRoleFormDataModel) {
    const token = this.cookie.getCookie('token');
    if (!token) return;
    const { role } = model;
    this.http.chooseRolePost({ token, role }, res => {
      if (res.success) {
        if (res.role === 'vet') {
          this.store.dispatch(
            setRoute({ page: RoutePageEnum.dashboardVet, section: RouteSectionEnum.dashboardVet })
          );
        } else if (res.role === 'client') {
          this.store.dispatch(
            setRoute({ page: RoutePageEnum.dashboardClient, section: RouteSectionEnum.dashboardClient })
          );
        } else {
          this.store.dispatch(
            setRoute({ page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard })
          );
        }
      }
    }).subscribe();
  }
}
