import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { SelectControlModel } from './select-control.model'

@Component({
  selector: 'lib-select-control',
  imports: [CommonModule, ReactiveFormsModule, TextControlComponent],
  templateUrl: './select-control.component.html',
  styleUrl: './select-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class SelectControlComponent implements OnInit {
  @ViewChild('select') select!: ElementRef
  @ViewChild('selectControl') selectControl!: ElementRef

  @Input({ required: true }) model!: SelectControlModel

  ngOnInit() {
    if (this.model.formGroup) {
      this.select.nativeElement.setAttribute('formGroup', this.model.formGroup)
      this.selectControl.nativeElement.setAttribute('formControlName', this.model.controlName)
    }
  }
}
