import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate:[AdminGuard],
  },
  {
    path: '',
    redirectTo: 'employee-list',
    pathMatch: 'full',
  },
  {
    path: 'employee-list',
    loadComponent: () => import('./employee-list/employee-list.page').then( m => m.EmployeeListPage)

  },
  
];
