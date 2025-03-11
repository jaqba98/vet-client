import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMenuFormModel, VetMenuModel } from './vet-menu-form.model'
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store'

@Component({
  selector: 'lib-vet-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './vet-menu-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMenuFormComponent
  extends BaseFormService<VetMenuFormModel, VetMenuModel>
  implements OnInit {
  constructor(private readonly store: Store<RouteStoreModel>) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      vetSettings: {
        id: 'vetSettings',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Settings',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetClinic: {
        id: 'vetClinic',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Clinic',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetMedicalRecord: {
        id: 'vetMedicalRecord',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Medical Record',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetMedication: {
        id: 'vetMedication',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Medication',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetServices: {
        id: 'vetServices',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Services',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetAppointment: {
        id: 'vetAppointment',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Appointment',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetInvoice: {
        id: 'vetInvoice',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Invoice',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      vetPatients: {
        id: 'vetPatients',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Patients',
        },
        defaultValue: false,
        fullWidth: true,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
    })
  }

  override onSubmit(model: VetMenuModel) {
    if (model.vetSettings) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetSettings,
          section: RouteSectionEnum.dashboardVetSettings,
        }),
      )
    }
    else if (model.vetClinic) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetClinic,
          section: RouteSectionEnum.dashboardVetClinic,
        }),
      )
    }
    else if (model.vetMedicalRecord) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetMedicalRecord,
          section: RouteSectionEnum.dashboardVetMedicalRecord,
        }),
      )
    }
    else if (model.vetMedication) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetMedication,
          section: RouteSectionEnum.dashboardVetMedication,
        }),
      )
    }
    else if (model.vetServices) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetServices,
          section: RouteSectionEnum.dashboardVetServices,
        }),
      )
    }
    else if (model.vetAppointment) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetAppointment,
          section: RouteSectionEnum.dashboardVetAppointment,
        }),
      )
    }
    else if (model.vetInvoice) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetInvoice,
          section: RouteSectionEnum.dashboardVetInvoice,
        }),
      )
    }
    else if (model.vetPatients) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.dashboardVetPatients,
          section: RouteSectionEnum.dashboardVetPatients,
        }),
      )
    }
  }
}
