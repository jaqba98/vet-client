import { Injectable } from '@angular/core';

import { InputControlModel } from './input-control.model';

@Injectable({ providedIn: 'root' })
export class InputControlBuilder {
  buildEmailInput(name: string, placeholder = ''): InputControlModel {
    return { name, type: 'email', placeholder, defaultValue: '' };
  }

  buildPasswordInput(name: string, placeholder = ''): InputControlModel {
    return { name, type: 'password', placeholder, defaultValue: '' };
  }
}
