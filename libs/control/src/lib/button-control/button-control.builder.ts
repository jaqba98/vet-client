import { Injectable } from '@angular/core';

import { ButtonControlModel } from './button-control.model';

@Injectable({ providedIn: 'root' })
export class ButtonControlBuilder {
  buildSubmitButton(name: string, text: string): ButtonControlModel {
    return { name, type: 'submit', text };
  }
}
