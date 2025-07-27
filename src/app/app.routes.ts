import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
    {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login-failed',
    component: ProfileComponent,
  },
];
