import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { CardControlComponent } from '@vet-client/lib-control';
import {
  BaseComponentDirective,
  TextConvertUtils,
} from '@vet-client/lib-utils';
import { RoleDomainEnum } from '@vet-client/lib-domain';
import { HttpPostAppService } from '@vet-client/lib-http';
import { CookieService } from '@vet-client/lib-system';
import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store';
import { ChooseRoleFormModel, ChooseRoleModel } from './choose-role-form.model';

@Component({
  selector: 'lib-choose-role-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent
  extends BaseFormService<ChooseRoleFormModel, ChooseRoleModel>
  implements OnInit
{
  constructor(
    private readonly httpPost: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly store: Store<RouteStoreModel>
  ) {
    super();
  }

  ngOnInit() {
    this.initBaseForm({
      role: {
        kind: 'radio-button',
        name: 'role',
        options: [
          {
            id: RoleDomainEnum.vet,
            value: TextConvertUtils.firstLetterUppercase(RoleDomainEnum.vet),
          },
          {
            id: RoleDomainEnum.client,
            value: TextConvertUtils.firstLetterUppercase(RoleDomainEnum.client),
          },
        ],
        defaultValue: RoleDomainEnum.vet,
        isEnabled: true
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
        isEnabled: true
      },
    });
  }

  override onSubmit(model: ChooseRoleModel) {
    const token = this.cookie.getToken();
    if (token === null) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.home,
        })
      );
      return;
    }
    this.httpPost
      .chooseRolePost({ token, role: model.role })
      .subscribe((response) => {
        const { success, role } = response;
        if (success) {
          if (role === RoleDomainEnum.vet) {
            this.store.dispatch(
              setRoute({
                page: RoutePageEnum.dashboardVet,
                section: RouteSectionEnum.dashboardVet,
              })
            );
          } else if (role === RoleDomainEnum.client) {
            this.store.dispatch(
              setRoute({
                page: RoutePageEnum.dashboardClient,
                section: RouteSectionEnum.dashboardClient,
              })
            );
          } else {
            throw new Error('Not supported role!');
          }
        }
      });
  }
}
