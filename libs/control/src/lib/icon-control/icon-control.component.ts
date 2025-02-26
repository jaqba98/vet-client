import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IconControlModel } from './icon-control.model';

@Component({
  selector: 'lib-icon-control',
  imports: [FontAwesomeModule],
  templateUrl: './icon-control.component.html',
  styleUrl: './icon-control.component.scss'
})
export class IconControlComponent {
  @Input({ required: true }) model!: IconControlModel;
}
