import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-login-form',
  templateUrl: './login-form.component.html',
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
