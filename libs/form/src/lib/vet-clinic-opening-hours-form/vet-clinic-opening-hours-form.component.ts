import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import { ActionTypeEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { OpeningHoursFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicOpeningHoursTableFormType } from '@vet-client/lib-store'
import { VetClinicOpeningHoursNotification } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'

@Component({
  selector: 'lib-vet-clinic-opening-hours-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-opening-hours-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicOpeningHoursFormComponent {
  formModel: TableFormModel<OpeningHoursFormModel>
  name = ActionTypeEnum.clinicOpeningHours

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
        .buildInput('text', 'Monday From')
        .build(),
      mondayTo: this.baseForm
        .buildInput('text', 'Monday To')
        .build(),
      tuesdayFrom: this.baseForm
        .buildInput('text', 'Tuesday From')
        .build(),
      tuesdayTo: this.baseForm
        .buildInput('text', 'tuesday To')
        .build(),
      wednesdayFrom: this.baseForm
        .buildInput('text', 'Wednesday From')
        .build(),
      wednesdayTo: this.baseForm
        .buildInput('text', 'Wednesday To')
        .build(),
      thursdayFrom: this.baseForm
        .buildInput('text', 'Thursday From')
        .build(),
      thursdayTo: this.baseForm
        .buildInput('text', 'Thursday To')
        .build(),
      fridayFrom: this.baseForm
        .buildInput('text', 'Friday From')
        .build(),
      fridayTo: this.baseForm
        .buildInput('text', 'Friday To')
        .build(),
      saturdayFrom: this.baseForm
        .buildInput('text', 'Saturday From')
        .build(),
      saturdayTo: this.baseForm
        .buildInput('text', 'Saturday To')
        .build(),
      sundayFrom: this.baseForm
        .buildInput('text', 'Sunday From')
        .build(),
      sundayTo: this.baseForm
        .buildInput('text', 'Sunday To')
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is Archived')
        .build(),
    }
  }
}
