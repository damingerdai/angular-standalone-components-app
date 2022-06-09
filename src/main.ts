import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

const ROUTES: Route[] = [
  {
    path: 'button', loadComponent: () => import('./app/button-list/button-list.component').then(mod => mod.ButtonListComponent)
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([...ROUTES]),
    )
  ]
});
