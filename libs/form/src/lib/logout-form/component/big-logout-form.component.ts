import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseLogoutFormService } from '../base/base-logout-form.service'
import { LogoutDomainDataModel, LogoutDomainFormDataModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-big-logout-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: '../base/base-logout-form.component.html',
  styleUrl: '../base/base-logout-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class BigLogoutFormComponent
  extends BaseFormService<LogoutDomainFormDataModel, LogoutDomainDataModel>
  implements OnInit {
  logoutFormClass = 'base-logout-form--big'

  constructor(private readonly baseLogoutForm: BaseLogoutFormService) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Log out',
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
      },
    })
  }

  override onSubmit() {
    this.baseLogoutForm.onSubmit()
  }
}
