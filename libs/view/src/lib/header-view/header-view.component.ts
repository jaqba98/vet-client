import { Component } from "@angular/core";
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { TITLE } from '@vet-client/lib-const';
import { IconControlComponent, IconControlModel, SectionControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-header-view',
  imports: [SectionControlComponent, IconControlComponent],
  templateUrl: './header-view.component.html',
  styleUrl: './header-view.component.scss'
})
export class HeaderViewComponent {
  readonly title = TITLE;

  readonly logoModel: IconControlModel = { icon: faPaw };
}
