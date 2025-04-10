import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { ActionTypeEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { OpeningHourFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicOpeningHoursTableFormType } from '@vet-client/lib-store'
import { VetClinicOpeningHoursNotification } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { Validators } from '@angular/forms'
import { HOURS } from '@vet-client/lib-const'

@Component({
  selector: 'lib-vet-clinic-opening-hours-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-opening-hours-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicOpeningHoursFormComponent {
  formModel: TableFormModel<OpeningHourFormModel>
  name = ActionTypeEnum.clinicOpeningHours
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<ClinicOpeningHoursTableFormType>,
    public crud: VetClinicOpeningHoursNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .buildIsEnabled(false)
        .build(),
      mondayFrom: this.baseForm
        .buildSelect('Monday From', '00:00', HOURS)
        .buildValidators([Validators.required])
        .build(),
      mondayTo: this.baseForm
        .buildSelect('Monday To', '00:00', HOURS)
        .build(),
      tuesdayFrom: this.baseForm
        .buildSelect('Tuesday From', '00:00', HOURS)
        .build(),
      tuesdayTo: this.baseForm
        .buildSelect('tuesday To', '00:00', HOURS)
        .build(),
      wednesdayFrom: this.baseForm
        .buildSelect('Wednesday From', '00:00', HOURS)
        .build(),
      wednesdayTo: this.baseForm
        .buildSelect('Wednesday To', '00:00', HOURS)
        .build(),
      thursdayFrom: this.baseForm
        .buildSelect('Thursday From', '00:00', HOURS)
        .build(),
      thursdayTo: this.baseForm
        .buildSelect('Thursday To', '00:00', HOURS)
        .build(),
      fridayFrom: this.baseForm
        .buildSelect('Friday From', '00:00', HOURS)
        .build(),
      fridayTo: this.baseForm
        .buildSelect('Friday To', '00:00', HOURS)
        .build(),
      saturdayFrom: this.baseForm
        .buildSelect('Saturday From', '00:00', HOURS)
        .build(),
      saturdayTo: this.baseForm
        .buildSelect('Saturday To', '00:00', HOURS)
        .build(),
      sundayFrom: this.baseForm
        .buildSelect('Sunday From', '00:00', HOURS)
        .build(),
      sundayTo: this.baseForm
        .buildSelect('Sunday To', '00:00', HOURS)
        .build(),
      clinicId: this.baseForm
        .buildInput('text', 'Clinic id')
        .buildValidators([Validators.required])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
