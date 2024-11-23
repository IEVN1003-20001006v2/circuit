import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import(''),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  //   { path: 'admin/users', component: UserManagementComponent },
  //   { path: 'admin/apis', component: ApiManagementComponent },
  //   { path: 'dashboard', component: DashboardComponent },
  //   { path: 'learning-process', component: LearningProcessComponent },
  //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
