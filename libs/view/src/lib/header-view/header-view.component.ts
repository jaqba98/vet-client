import { Component } from "@angular/core";
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { IconControlComponent, IconControlModel } from '@vet-client/lib-control';

@Component({
  selector: 'lib-header-view',
  imports: [IconControlComponent],
  templateUrl: './header-view.component.html',
  styleUrl: './header-view.component.scss'
})
export class HeaderViewComponent {
  readonly logoModel: IconControlModel = { icon: faPaw };
}
