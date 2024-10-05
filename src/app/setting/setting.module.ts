import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';


@NgModule({
  declarations: [ResetPasswordComponent,ForgetPasswordComponent],
  imports: [CommonModule, SettingRoutingModule],
})
export class SettingModule {}
