import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserComponent } from './app-user.component';
import { AppUserRoutes } from './app-user.routing';
import { CommonSharedModule } from '../../common-shared/common-shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppUserRoutes,
    CommonSharedModule
  ],
  declarations: [AppUserComponent]
})
export class AppUserModule { }
