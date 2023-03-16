import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserComponent } from './app-user.component';
import { AppUserRoutes } from './app-user.routing';
import { CommonSharedModule } from '../../common-shared/common-shared.module';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  imports: [
    CommonModule,
    AppUserRoutes,
    CommonSharedModule
  ],
  declarations: [AppUserComponent, UserAddComponent]
})
export class AppUserModule { }
