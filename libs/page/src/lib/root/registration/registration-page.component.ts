// done
import { Component } from "@angular/core";

import {
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent,
  RegistrationViewComponent
} from '@vet-client/lib-view';
import {
  HomeNavMenuFormComponent,
} from '@vet-client/lib-form';
import {
  SmallLoginRegistrationFormComponent
} from '@vet-client/lib-form';
import {
  BigLoginRegistrationFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-registration-page',
  imports: [
    NavViewComponent,
    MainViewComponent,
    FooterViewComponent,
    RegistrationViewComponent,
    HomeNavMenuFormComponent,
    SmallLoginRegistrationFormComponent,
    BigLoginRegistrationFormComponent,
  ],
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {}
