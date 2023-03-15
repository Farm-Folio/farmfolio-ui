import { Routes, RouterModule } from '@angular/router';
import { AppUserComponent } from './app-user.component';

const routes: Routes = [
  { path: '', component: AppUserComponent },
];

export const AppUserRoutes = RouterModule.forChild(routes);
