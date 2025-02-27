import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  BaseFormComponent,
  BaseFormService,
  CookieService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  LogoutPostHttpResponseModel,
} from '@vet-client/lib-system';
import { LogoutFormDataModel, LogoutFormModel } from './logout-form.model';
import { ButtonControlTypeEnum } from '@vet-client/lib-control';

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
})
export class LogoutFormComponent extends BaseFormService<
  LogoutFormModel,
  LogoutFormDataModel
> {
  constructor(
    private readonly http: HttpService,
    private readonly cookie: CookieService,
    private readonly route: Router
  ) {
    super({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Logout',
          position: 'left'
        },
        defaultValue: false,
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
        const { logout } = response;
        if (logout) {
          this.cookie.deleteCookie('token');
          this.route.navigate(['/home']);
        }
      });
  }
}
