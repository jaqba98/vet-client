// done
import { Component } from '@angular/core';

import {
  CookieService,
  RouterEnum,
  RouterService
} from '@vet-client/lib-system';
import { LogoutSmallFormDataModel, LogoutSmallFormModel } from './logout-small-form.model';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { LogoutFormDataModel } from '../logout-form/logout-form.model';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-logout-small-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-small-form.component.html',
  styleUrl: './logout-small-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LogoutSmallFormComponent extends BaseFormService<LogoutSmallFormModel, LogoutSmallFormDataModel> {
  constructor(
    private readonly http: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly router: RouterService
  ) {
    super({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faRightFromBracket,
            color: 'icon__light-primary'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LogoutFormDataModel) {
    if (model.logout) {
      const token = this.cookie.getCookie('token');
      if (!token) return;
      this.http.logoutPost({ token }, res => {
        if (res.success) {
          this.cookie.deleteCookie('token');
          this.router.redirect(RouterEnum.home);
        }
      }).subscribe();
    }
  }
}
