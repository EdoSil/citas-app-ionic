import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';

jeepSqlite(window);
import { bootstrapApplication } from '@angular/platform-browser';
import { add } from 'ionicons/icons';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules
} from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

//  Registro de iconos Ionicons (después de imports)

addIcons({
  'settings-outline': settingsOutline,
  'add': add
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

