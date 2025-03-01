import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CookieService,
  RouterEnum,
  RouterService
} from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ChooseRoleFormDataModel, ChooseRoleFormModel } from './choose-role-form.model';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-choose-role-form',
  imports: [CommonModule ,BaseFormComponent, CardControlComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent extends BaseFormService<ChooseRoleFormModel, ChooseRoleFormDataModel> {
  constructor(
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
          this.router.redirect(RouterEnum.dashboardVet);
        } else if (res.role === 'client') {
          this.router.redirect(RouterEnum.dashboardClient);
        } else {
          this.router.redirect(RouterEnum.dashboard);
        }
      }
    }).subscribe();
  }
}
