import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ChangePasswordValidators } from './change-password-validators';

@Component({
  selector: "change-password-form",
  templateUrl: "./change-password-form.component.html",
  styleUrls: ["./change-password-form.component.css"]
})
export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: [
        "",
        Validators.required,
        ChangePasswordValidators.isCorrectPassword
      ],
      newPassword: ["", Validators.required],
      confirmPassword: [
        "",
        [Validators.required,
        ChangePasswordValidators.invalidMatch("newPassword")]
      ]
    });
  }

  get oldPassword(): AbstractControl {
    return this.form.get("oldPassword");
  }
  get newPassword(): AbstractControl {
    return this.form.get("newPassword");
  }
  get confirmPassword(): AbstractControl {
    return this.form.get("confirmPassword");
  }

  changePassword() {}
}
