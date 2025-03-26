import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { VetMenuDomainModel, VetMenuFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreModel,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-vet-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './vet-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMenuFormComponent
  extends BaseFormService<VetMenuFormModel, VetMenuDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private store: Store<RouteStoreModel>,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit()
    this.initBaseForm({
      vetSettings: this.baseForm
        .buildButton('vetSettings', 'Settings', 'primary')
        .buildFullWidth()
        .build(),
      vetClinic: this.baseForm
        .buildButton('vetClinic', 'Clinic', 'primary')
        .buildFullWidth()
        .build(),
      vetClinicOpeningHours: this.baseForm
        .buildButton('vetClinicOpeningHours', 'Clinic Opening Hours', 'primary')
        .buildFullWidth()
        .build(),
      vetEmployment: this.baseForm
        .buildButton('vetEmployment', 'Employment', 'primary')
        .buildFullWidth()
        .build(),
      vetMedicalRecord: this.baseForm
        .buildButton('vetMedicalRecord', 'Medical Record', 'primary')
        .buildFullWidth()
        .build(),
      vetMedication: this.baseForm
        .buildButton('vetMedication', 'Medication', 'primary')
        .buildFullWidth()
        .build(),
      vetService: this.baseForm
        .buildButton('vetServices', 'Services', 'primary')
        .buildFullWidth()
        .build(),
      vetAppointment: this.baseForm
        .buildButton('vetAppointment', 'Appointment', 'primary')
        .buildFullWidth()
        .build(),
      vetInvoice: this.baseForm
        .buildButton('vetInvoice', 'Invoice', 'primary')
        .buildFullWidth()
        .build(),
      vetPatients: this.baseForm
        .buildButton('vetPatients', 'Patients', 'primary')
        .buildFullWidth()
        .build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: VetMenuDomainModel) {
    if (domain.vetSettings) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetSettings,
          section: RouteSectionEnum.dashboardVetSettings,
        }),
      )
    }
    else if (domain.vetClinic) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetClinic,
          section: RouteSectionEnum.dashboardVetClinic,
        }),
      )
    }
    else if (domain.vetClinicOpeningHours) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetClinicOpeningHours,
          section: RouteSectionEnum.dashboardVetClinicOpeningHours,
        }),
      )
    }
    else if (domain.vetEmployment) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetEmployment,
          section: RouteSectionEnum.dashboardVetEmployment,
        }),
      )
    }
    else if (domain.vetMedicalRecord) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetMedicalRecord,
          section: RouteSectionEnum.dashboardVetMedicalRecord,
        }),
      )
    }
    else if (domain.vetMedication) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetMedication,
          section: RouteSectionEnum.dashboardVetMedication,
        }),
      )
    }
    else if (domain.vetService) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetService,
          section: RouteSectionEnum.dashboardVetService,
        }),
      )
    }
    else if (domain.vetAppointment) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetAppointment,
          section: RouteSectionEnum.dashboardVetAppointment,
        }),
      )
    }
    else if (domain.vetInvoice) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetInvoice,
          section: RouteSectionEnum.dashboardVetInvoice,
        }),
      )
    }
    else if (domain.vetPatients) {
      this.store.dispatch(
        routeSetAction({
          page: RoutePageEnum.dashboardVetPatients,
          section: RouteSectionEnum.dashboardVetPatients,
        }),
      )
    }
  }
}
