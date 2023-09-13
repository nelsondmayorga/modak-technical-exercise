import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ILoginRequest } from '../../types/login-request.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  @Input() errorMessage: string | null = null;
  @Output() onSubmit = new EventEmitter<ILoginRequest>();

  get usernameField() {
    return this.form.get('username');
  }

  get passwordField() {
    return this.form.get('password');
  }

  submitData(): void {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value as ILoginRequest);
    }
  }
}
