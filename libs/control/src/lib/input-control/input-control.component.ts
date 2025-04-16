import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { InputControlModel } from './input-control.model'
import { TextControlComponent } from '../text-control/text-control.component'

@Component({
  selector: 'lib-input-control',
  imports: [ReactiveFormsModule, CommonModule, TextControlComponent],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class InputControlComponent implements OnInit {
  @ViewChild('input') input!: ElementRef
  @ViewChild('inputControl') inputControl!: ElementRef

  @Input({ required: true }) model!: InputControlModel

  ngOnInit() {
    if (this.model.formGroup) {
      this.input.nativeElement.setAttribute('formGroup', this.model.formGroup)
      this.inputControl.nativeElement.setAttribute('formControlName', this.model.controlName)
    }
  }
}
