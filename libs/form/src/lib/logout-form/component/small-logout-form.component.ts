import { Component, OnInit } from '@angular/core'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  BaseLogoutFormModel,
  BaseLogoutModel,
} from '../base/base-logout-form.model'
import { BaseLogoutFormService } from '../base/base-logout-form.service'

@Component({
  selector: 'lib-small-logout-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: '../base/base-logout-form.component.html',
  styleUrl: '../base/base-logout-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class SmallLogoutFormComponent
  extends BaseFormService<BaseLogoutFormModel, BaseLogoutModel>
  implements OnInit {
  logoutFormClass = 'base-logout-form--small'

  constructor(public readonly baseLogoutForm: BaseLogoutFormService) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faArrowRightFromBracket,
            color: 'light-primary',
            fontSize: '1rem',
          },
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
      },
    })
  }

  override onSubmit(model: BaseLogoutModel) {
    this.baseLogoutForm.onSubmit(model)
  }
}
