import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { PhotosService } from './app/services/photos.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
    // loadComponent: () =>
    //   import('./app/home/home.component').then(
    //     (mod) => mod.HomeComponent
    //   ),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./app/button-list/button-list.component').then(
        (mod) => mod.ButtonListComponent
      ),
  },
  {
    path: 'chip',
    loadComponent: () =>
      import('./app/chip-list/chip-list.component').then(
        (mod) => mod.ChipListComponent
      ),
  },
  {
    path: 'photo',
    loadComponent: () =>
      import('./app/photo-list/photo-list.component').then(
        (mod) => mod.PhotoListComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'photoUrl',
      useValue: 'https://picsum.photos',
    },
    {provide: PhotosService, useClass: PhotosService },
    importProvidersFrom(RouterModule.forRoot([...ROUTES])),
    importProvidersFrom(HttpClientModule)
  ],
}).catch(err => console.error(err));
