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
          text: 'Settings'
        },
        defaultValue: false,
        fullWidth: true
      },
      vetClinic: {
        id: 'vetClinic',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Clinic'
        },
        defaultValue: false,
        fullWidth: true
      },
      vetMedicalRecord: {
        id: 'vetMedicalRecord',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Medical Record'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: VetMenuModel) {
    const { vetSettings, vetClinic, vetMedicalRecord } = model;
    if (vetSettings) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetSettings, section: RouteSectionEnum.dashboardVetSettings })
      );
    } else if (vetClinic) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetClinic, section: RouteSectionEnum.dashboardVetClinic })
      );
    } else if (vetMedicalRecord) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetMedicalRecord, section: RouteSectionEnum.dashboardVetMedicalRecord })
      );
    }
  }
}
