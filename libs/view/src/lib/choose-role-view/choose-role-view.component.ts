// done
import { Component } from "@angular/core";

import { SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ChooseRoleFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-choose-role-view',
  imports: [SectionControlComponent, ChooseRoleFormComponent],
  templateUrl: './choose-role-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ChooseRoleViewComponent {}
