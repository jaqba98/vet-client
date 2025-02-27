import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ButtonControlModel } from './button-control.model';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { ButtonControlTypeEnum } from './button-control-type.enum';

@Component({
  selector: 'lib-button-control',
  imports: [CommonModule, IconControlComponent],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class ButtonControlComponent {
  @Input({ required: true }) model!: ButtonControlModel;

  @Output() event = new EventEmitter<string>();

  onClick(event: string) {
    this.event.emit(event);
  }

  getClassList() {
    return {
      'button-control': true,
      'button-control__icon': this.isIcon(),
    };
  }

  private isIcon() {
    return this.model.value.type === ButtonControlTypeEnum.icon;
  }
}
