import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'button',
    loadComponent: () =>
      import('../app/button-list/button-list.component').then(
        (mod) => mod.ButtonListComponent,
      ),
  },
  {
    path: 'chip',
    loadComponent: () =>
      import('../app/chip-list/chip-list.component').then(
        (mod) => mod.ChipListComponent,
      ),
  },
  {
    path: 'photo',
    loadComponent: () =>
      import('../app/photo-list/photo-list.component').then(
        (mod) => mod.PhotoListComponent,
      ),
  },
];
