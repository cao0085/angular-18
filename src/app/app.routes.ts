import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,   // 套用你剛做的 Layout
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.component').then(m => m.AboutComponent),
      },      {
        path: 'form',
        loadComponent: () =>
          import('./features/form/form.component').then(m => m.FormComponent),
      },
    ]
  },
];
