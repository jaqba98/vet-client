// done
import { Component } from '@angular/core';

import {
  CookieService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LogoutFormDataModel, LogoutFormModel } from './logout-form.model';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
  styleUrl: './logout-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class LogoutFormComponent extends BaseFormService<LogoutFormModel, LogoutFormDataModel> {
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
          type: 'text',
          text: 'Logout',
        },
        defaultValue: false,
        fullWidth: false,
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
