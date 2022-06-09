import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiZXl0ZGRpYXoiLCJhIjoiY2wzMHdnbDM5MGpnaTNkbW9hMHVweGc0dSJ9.PP150Wyu9d0r1O0wv2dPcw';


if ( !navigator.geolocation ) {
  throw new Error('Navegador no soporta la Geolocalización')
}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
