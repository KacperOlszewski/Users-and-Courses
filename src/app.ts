import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'rxjs/add/operator/map';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

declare const NODE_ENV: string;

if (NODE_ENV === 'prod') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);