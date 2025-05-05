import { Injectable } from '@angular/core';

import { BaseStore } from './base.store';
import { UserModel } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserStore extends BaseStore<UserModel> {
  constructor() {
    super({
      name: '',
      username: '',
    });
  }
}
