import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMenuFormModel, VetMenuModel } from './vet-menu-form.model'
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, routeSetAction } from '@vet-client/lib-store'

@Component({
  selector: 'lib-vet-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './vet-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMenuFormComponent
  extends BaseFormService<VetMenuFormModel, VetMenuModel>
  implements OnInit {
  constructor(
    private store: Store<RouteStoreModel>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      vetSettings: this.baseForm.buildButton('vetSettings', 'Settings', 'primary').build(),
      vetClinic: this.baseForm.buildButton('vetClinic', 'Clinic', 'primary').build(),
      vetMedicalRecord: this.baseForm.buildButton('vetMedicalRecord', 'Medical Record', 'primary').build(),
      vetMedication: this.baseForm.buildButton('vetMedication', 'Medication', 'primary').build(),
      vetServices: this.baseForm.buildButton('vetServices', 'Services', 'primary').build(),
      vetAppointment: this.baseForm.buildButton('vetAppointment', 'Appointment', 'primary').build(),
      vetInvoice: this.baseForm.buildButton('vetInvoice', 'Invoice', 'primary').build(),
      vetPatients: this.baseForm.buildButton('vetPatients', 'Patients', 'primary').build(),
    })
  }

  override onSubmit(model: VetMenuModel) {
    if (model.vetSettings) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetSettings,
          section: RouteSectionEnum.dashboardVetSettings,
        }),
      )
    }
    else if (model.vetClinic) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetClinic,
          section: RouteSectionEnum.dashboardVetClinic,
        }),
      )
    }
    else if (model.vetMedicalRecord) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetMedicalRecord,
          section: RouteSectionEnum.dashboardVetMedicalRecord,
        }),
      )
    }
    else if (model.vetMedication) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetMedication,
          section: RouteSectionEnum.dashboardVetMedication,
        }),
      )
    }
    else if (model.vetServices) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetServices,
          section: RouteSectionEnum.dashboardVetServices,
        }),
      )
    }
    else if (model.vetAppointment) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetAppointment,
          section: RouteSectionEnum.dashboardVetAppointment,
        }),
      )
    }
    else if (model.vetInvoice) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetInvoice,
          section: RouteSectionEnum.dashboardVetInvoice,
        }),
      )
    }
    else if (model.vetPatients) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetPatients,
          section: RouteSectionEnum.dashboardVetPatients,
        }),
      )
    }
  }
}
