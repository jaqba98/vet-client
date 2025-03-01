import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BaseFormComponent,
  BaseFormService,
  ChooseRolePostHttpResponseModel,
  CookieService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  RouterEnum,
  RouterService
} from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ChooseRoleFormDataModel, ChooseRoleFormModel } from './choose-role-form.model';

@Component({
  selector: 'lib-choose-role-form',
  imports: [CommonModule ,BaseFormComponent, CardControlComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent extends BaseFormService<ChooseRoleFormModel, ChooseRoleFormDataModel> {
  constructor(
    private readonly http: HttpService,
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
        defaultValue: 'vet',
        validators: [],
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
    if (!token) {
      return;
    }
    return this.http
      .execute<ChooseRolePostHttpResponseModel>({
        method: HttpMethodEnum.post,
        type: {
          endpoint: HttpEndpointEnum.chooseRole,
          request: {
            token,
            role: model.role
          },
        },
      })
      .subscribe((response) => {
        if (response.success) {
          if (response.role === 'vet') {
            this.router.redirect(RouterEnum.dashboardVet);
          } else if (response.role === 'client') {
            this.router.redirect(RouterEnum.dashboardClient);
          } else {
            this.router.redirect(RouterEnum.dashboard);
          }
        }
      });
  }
}
