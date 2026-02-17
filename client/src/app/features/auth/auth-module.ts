import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { SharedModule } from "../../shared/shared-module";
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';
import { ResetPassword } from './reset-password/reset-password';
import { Profile } from './profile/profile';
import { VerifyEmail } from './verify-email/verify-email';


@NgModule({
  declarations: [
    Login,
    Register,
    ForgotPassword,
    ResetPassword,
    VerifyEmail,
    Profile
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class AuthModule { }
