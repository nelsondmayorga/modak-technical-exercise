import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/prime-ng.module';

@NgModule({
  declarations: [LoginFormComponent, AuthContainerComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, PrimeNgModule],
})
export class AuthModule {}
