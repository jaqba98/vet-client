import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RadioControlModel } from './radio-control.model'
import { TextControlComponent } from '../text-control/text-control.component'

@Component({
  selector: 'lib-radio-control',
  imports: [CommonModule, TextControlComponent, ReactiveFormsModule],
  templateUrl: './radio-control.component.html',
  styleUrl: './radio-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class RadioControlComponent implements OnInit {
  @ViewChild('radio') radio!: ElementRef
  @ViewChild('radioControl') radioControl!: ElementRef

  @Input({ required: true }) model!: RadioControlModel

  ngOnInit() {
    if (this.model.formGroup) {
      this.radio.nativeElement.setAttribute('formGroup', this.model.formGroup)
      this.radioControl.nativeElement.setAttribute('formControlName', this.model.controlName)
    }
  }
}
