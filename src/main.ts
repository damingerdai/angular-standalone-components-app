import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouterModule,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { ROUTES } from './app/app.route';

import { AppComponent } from './app/app.component';
import { PhotosService } from './app/services/photos.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    {
      provide: 'photoUrl',
      useValue: 'https://picsum.photos',
    },
    provideRouter(
      ROUTES,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    { provide: PhotosService, useClass: PhotosService },
    importProvidersFrom(RouterModule.forRoot([...ROUTES])),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
