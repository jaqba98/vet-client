// done
import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  CookieService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  LogoutPostHttpResponseModel,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LogoutFormDataModel, LogoutFormModel } from './logout-form.model';

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
  styleUrl: './logout-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class LogoutFormComponent extends BaseFormService<LogoutFormModel, LogoutFormDataModel> {
  constructor(
    private readonly http: HttpService,
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
    this.http
      .execute<LogoutPostHttpResponseModel>({
        method: HttpMethodEnum.post,
        type: {
          endpoint: HttpEndpointEnum.logout,
          request: { logout: model.logout },
        },
      })
      .subscribe((response) => {
        if (response.logout) {
          this.cookie.deleteCookie('token');
          this.router.redirect(RouterEnum.home);
        }
      });
  }
}
