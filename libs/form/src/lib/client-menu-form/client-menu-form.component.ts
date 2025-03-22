import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import {
  ClientMenuDomainModel,
  ClientMenuFormModel,
} from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreModel,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-client-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './client-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientMenuFormComponent
  extends BaseFormService<ClientMenuFormModel, ClientMenuDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private store: Store<RouteStoreModel>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      clientSettings: this.baseForm
        .buildButton('clientSettings', 'Settings', 'primary')
        .buildFullWidth()
        .build(),
      clientPets: this.baseForm
        .buildButton('clientPets', 'Pets', 'primary')
        .buildFullWidth()
        .build(),
      clientAppointment: this.baseForm
        .buildButton('clientAppointment', 'Appointment', 'primary')
        .buildFullWidth()
        .build(),
      clientInvoice: this.baseForm
        .buildButton('clientInvoice', 'Invoice', 'primary')
        .buildFullWidth()
        .build(),
      clientMedicalRecord: this.baseForm
        .buildButton('clientMedicalRecord', 'Medical Record', 'primary')
        .buildFullWidth()
        .build(),
      clientClinics: this.baseForm
        .buildButton('clientClinics', 'Clinics', 'primary')
        .buildFullWidth()
        .build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: ClientMenuDomainModel) {
    if (domain.clientSettings) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientSettings,
          section: RouteSectionEnum.dashboardClientSettings,
        }),
      )
    }
    else if (domain.clientPets) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientPets,
          section: RouteSectionEnum.dashboardClientPets,
        }),
      )
    }
    else if (domain.clientAppointment) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientAppointment,
          section: RouteSectionEnum.dashboardClientAppointment,
        }),
      )
    }
    else if (domain.clientInvoice) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientInvoice,
          section: RouteSectionEnum.dashboardClientInvoice,
        }),
      )
    }
    else if (domain.clientMedicalRecord) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientMedicalRecord,
          section: RouteSectionEnum.dashboardClientMedicalRecord,
        }),
      )
    }
    else if (domain.clientClinics) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardClientClinics,
          section: RouteSectionEnum.dashboardClientClinics,
        }),
      )
    }
  }
}
