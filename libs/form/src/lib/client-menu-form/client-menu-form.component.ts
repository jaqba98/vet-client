import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClientMenuFormModel,
  ClientMenuModel,
} from './client-menu-form.model'
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, routeSetAction } from '@vet-client/lib-store'

@Component({
  selector: 'lib-client-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './client-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientMenuFormComponent extends BaseFormService<ClientMenuFormModel, ClientMenuModel> implements OnInit {
  constructor(
    private store: Store<RouteStoreModel>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      clientSettings: this.baseForm.buildButton('clientSettings', 'Settings', 'primary').build(),
      clientPets: this.baseForm.buildButton('clientPets', 'Pets', 'primary').build(),
      clientAppointment: this.baseForm.buildButton('clientAppointment', 'Appointment', 'primary').build(),
      clientInvoice: this.baseForm.buildButton('clientInvoice', 'Invoice', 'primary').build(),
      clientMedicalRecord: this.baseForm.buildButton('clientMedicalRecord', 'Medical Record', 'primary').build(),
      clientClinics: this.baseForm.buildButton('clientClinics', 'Clinics', 'primary').build(),
    })
  }

  override onSubmit(model: ClientMenuModel) {
    if (model.clientSettings) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientSettings, section: RouteSectionEnum.dashboardClientSettings }),
      )
    }
    else if (model.clientPets) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientPets, section: RouteSectionEnum.dashboardClientPets }),
      )
    }
    else if (model.clientAppointment) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientAppointment, section: RouteSectionEnum.dashboardClientAppointment }),
      )
    }
    else if (model.clientInvoice) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientInvoice, section: RouteSectionEnum.dashboardClientInvoice }),
      )
    }
    else if (model.clientMedicalRecord) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientMedicalRecord, section: RouteSectionEnum.dashboardClientMedicalRecord }),
      )
    }
    else if (model.clientClinics) {
      this.store.dispatch(
        routeSetAction({ page: RoutePageEnum.dashboardClientClinics, section: RouteSectionEnum.dashboardClientClinics }),
      )
    }
  }
}
