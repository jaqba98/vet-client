import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import {
  BaseComponentDirective,
  TextConvertUtils,
} from '@vet-client/lib-utils'
import { ChooseRoleDomainDataModel, ChooseRoleDomainFormModel, RoleEnum } from '@vet-client/lib-domain'
import { HttpPostAppService } from '@vet-client/lib-http'
import { CookieService } from '@vet-client/lib-system'
import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  routeSetAction,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-choose-role-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent
  extends BaseFormService<ChooseRoleDomainFormModel, ChooseRoleDomainDataModel>
  implements OnInit {
  constructor(
    private readonly httpPost: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly store: Store<RouteStoreModel>,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      role: {
        kind: 'radio-button',
        name: 'role',
        options: [
          {
            id: RoleEnum.vet,
            value: TextConvertUtils.firstLetterUppercase(RoleEnum.vet),
          },
          {
            id: RoleEnum.client,
            value: TextConvertUtils.firstLetterUppercase(RoleEnum.client),
          },
        ],
        defaultValue: RoleEnum.vet,
        isEnabled: true,
      },
      save: {
        kind: 'button',
        id: 'save',
        value: {
          type: 'text',
          text: 'Save',
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
        isSquare: false,
      },
    })
  }

  override onSubmit(model: ChooseRoleDomainDataModel) {
    const token = this.cookie.getToken()
    if (token === null) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.home,
        }),
      )
      return
    }
    this.httpPost
      .chooseRolePost({ token, role: model.role })
      .subscribe((response) => {
        const { success, role } = response
        if (success) {
          if (role === RoleEnum.vet) {
            this.store.dispatch(
              routeSetAction({
                page: RoutePageEnum.dashboardVet,
                section: RouteSectionEnum.dashboardVet,
              }),
            )
          }
          else if (role === RoleEnum.client) {
            this.store.dispatch(
              routeSetAction({
                page: RoutePageEnum.dashboardClient,
                section: RouteSectionEnum.dashboardClient,
              }),
            )
          }
          else {
            throw new Error('Not supported role!')
          }
        }
      })
  }
}
