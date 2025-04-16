import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { TextareaControlModel } from './textarea-control.model'

@Component({
  selector: 'lib-textarea-control',
  imports: [ReactiveFormsModule, CommonModule, TextControlComponent],
  templateUrl: './textarea-control.component.html',
  styleUrl: './textarea-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TextareaControlComponent implements OnInit {
  @ViewChild('textarea') textarea!: ElementRef
  @ViewChild('textareaControl') textareaControl!: ElementRef

  @Input({ required: true }) model!: TextareaControlModel

  ngOnInit() {
    if (this.model.formGroup) {
      this.textarea.nativeElement.setAttribute('formGroup', this.model.formGroup)
      this.textareaControl.nativeElement.setAttribute('formControlName', this.model.controlName)
    }
  }
}
