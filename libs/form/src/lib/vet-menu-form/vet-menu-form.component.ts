import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  VetMenuFormModel, VetMenuModel
} from './vet-menu-form.model';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';

@Component({
  selector: 'lib-vet-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './vet-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetMenuFormComponent extends BaseFormService<VetMenuFormModel, VetMenuModel> {
  constructor(private readonly store: Store<RouteStoreModel>) {
    super({
      vetSettings: {
        id: 'vetSettings',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Vet Settings'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: VetMenuModel) {
    const { vetSettings } = model;
    if (vetSettings) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetVetSettings, section: RouteSectionEnum.dashboardVetVetSettings })
      );
    }
  }
}
