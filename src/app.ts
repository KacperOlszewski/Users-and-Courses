import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/add/operator/map';

declare const NODE_ENV: string;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Environment } from './app/shared/constants/environments';

if (NODE_ENV === Environment.prod || NODE_ENV === Environment.demo) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);