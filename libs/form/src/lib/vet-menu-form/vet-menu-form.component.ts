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
      },
      vetMedication: {
        id: 'vetMedication',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Medication'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: VetMenuModel) {
    if (model.vetSettings) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetSettings, section: RouteSectionEnum.dashboardVetSettings })
      );
    } else if (model.vetClinic) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetClinic, section: RouteSectionEnum.dashboardVetClinic })
      );
    } else if (model.vetMedicalRecord) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetMedicalRecord, section: RouteSectionEnum.dashboardVetMedicalRecord })
      );
    } else if (model.vetMedication) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardVetMedication, section: RouteSectionEnum.dashboardVetMedication })
      );
    }
  }
}
