// done
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { DashboardMenuOptionsFormDataModel, DashboardMenuOptionsFormModel } from './dashboard-menu-options-form.model';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-dashboard-menu-options-form',
  imports: [BaseFormComponent],
  templateUrl: './dashboard-menu-options-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class DashboardMenuOptionsFormComponent extends BaseFormService<
  DashboardMenuOptionsFormModel,
  DashboardMenuOptionsFormDataModel
> {
  @Output() event = new EventEmitter();

  @Input() flexDirectionColumn = false;

  constructor(private readonly router: RouterService) {
    super({
      dashboard: {
        id: 'home',
        kind: 'button',
        value: { type: 'text', text: 'Dashboard' },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: DashboardMenuOptionsFormDataModel) {
    if (model.dashboard) {
      this.router.redirect(RouterEnum.dashboard);
    }
    this.event.emit();
  }
}
