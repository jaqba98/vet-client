import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputControlComponent, ButtonControlComponent } from '@vet-client/lib-control';
import { ControlsArrayType } from './base-form.model';
import { HttpService } from '../http/service/http.service';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true}) controlsArray!: ControlsArrayType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input({ required: true }) onSubmit!: (http: HttpService, model: any) => void;

  constructor(private readonly http: HttpService) {
  }

  onBaseFormSubmit() {
    const model = this.formGroup.getRawValue();
    this.onSubmit(this.http, model);
  }
}
