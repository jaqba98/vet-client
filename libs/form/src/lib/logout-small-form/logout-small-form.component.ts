// done
import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  CookieService, HttpEndpointEnum, HttpMethodEnum,
  HttpService,
  LogoutPostHttpResponseModel, RouterEnum,
  RouterService
} from '@vet-client/lib-system';
import { LogoutSmallFormDataModel, LogoutSmallFormModel } from './logout-small-form.model';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { LogoutFormDataModel } from '../logout-form/logout-form.model';

@Component({
  selector: 'lib-logout-small-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-small-form.component.html',
  styleUrl: './logout-small-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LogoutSmallFormComponent extends BaseFormService<LogoutSmallFormModel, LogoutSmallFormDataModel> {
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
