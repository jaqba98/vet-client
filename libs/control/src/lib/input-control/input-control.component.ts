import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input-control',
  imports: [ReactiveFormsModule],
  templateUrl: './input-control.component.html'
})
export class InputControlComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;
}
