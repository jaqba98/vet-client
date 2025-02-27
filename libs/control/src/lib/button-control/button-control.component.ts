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
      'button-control__button': true,
      'button-control__icon': this.isIcon(),
      'button-control__link': this.isLink()
    };
  }

  getButtonControlClassList() {
    return {
      'button-control__left': this.model.value.position === 'left',
      'button-control__center': this.model.value.position === 'center',
      'button-control__right': this.model.value.position === 'right'
    };
  }

  private isIcon() {
    return this.model.value.type === ButtonControlTypeEnum.icon;
  }

  private isLink() {
    return this.model.value.type === ButtonControlTypeEnum.link;
  }
}
