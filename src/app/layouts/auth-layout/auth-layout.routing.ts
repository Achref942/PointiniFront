import { Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/pages/register/register.component';

import { LoginComponent } from '../../pages/login/login.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }

];
