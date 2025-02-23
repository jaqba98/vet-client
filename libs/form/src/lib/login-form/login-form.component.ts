import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpoint,
  HttpMethod,
  HttpService,
} from '@vet-client/lib-system';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends BaseFormService<LoginFormModel, LoginFormDataModel> {
  constructor() {
    super({
      controls: {
        email: {
          kind: 'input',
          type: 'text',
          placeholder: 'Email'
        },
        password: {
          kind: 'input',
          type: 'password',
          placeholder: 'Password'
        },
        login: {
          kind: 'button',
          type: 'submit',
          text: 'Log in'
        }
      }
    });
  }

  override onSubmit(http: HttpService, model: LoginFormDataModel) {
    http.execute({
      kind: HttpMethod.post,
      type: {
        kind: HttpEndpoint.login,
        dto: {
          email: model.email,
          password: model.password
        }
      }
    });
  }
}
