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
        fullWidth: true,
        color: 'primary'
      },
      clientPets: {
        id: 'clientPets',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Pets'
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary'
      },
      clientAppointment: {
        id: 'clientAppointment',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Appointment'
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary'
      },
      clientInvoice: {
        id: 'clientInvoice',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Invoice'
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary'
      },
      clientMedicalRecord: {
        id: 'clientMedicalRecord',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Medical Record'
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary'
      },
      clientClinics: {
        id: 'clientClinics',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Clinics'
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary'
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
    } else if (model.clientAppointment) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientAppointment, section: RouteSectionEnum.dashboardClientAppointment })
      );
    } else if (model.clientInvoice) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientInvoice, section: RouteSectionEnum.dashboardClientInvoice })
      );
    } else if (model.clientMedicalRecord) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientMedicalRecord, section: RouteSectionEnum.dashboardClientMedicalRecord })
      );
    } else if (model.clientClinics) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.dashboardClientClinics, section: RouteSectionEnum.dashboardClientClinics })
      );
    }
  }
}
