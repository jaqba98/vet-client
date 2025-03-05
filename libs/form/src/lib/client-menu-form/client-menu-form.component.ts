import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  ClientMenuFormModel,
  ClientMenuModel
} from './client-menu-form.model';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';

@Component({
  selector: 'lib-client-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './client-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientMenuFormComponent extends BaseFormService<ClientMenuFormModel, ClientMenuModel> {
  constructor(private readonly store: Store<RouteStoreModel>) {
    super({
      clientSettings: {
        id: 'clientSettings',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Settings'
        },
        defaultValue: false,
        fullWidth: true
      },
      clientPets: {
        id: 'clientPets',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Pets'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: ClientMenuModel) {
    if (model.clientSettings) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientSettings, section: RouteSectionEnum.dashboardClientSettings })
      );
    } else if (model.clientPets) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientPets, section: RouteSectionEnum.dashboardClientPets })
      );
    }
  }
}
