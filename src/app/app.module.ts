import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NavigationComponent } from './shared/layout/navigation/navigation.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MdlModule,
        AppRoutingModule
    ],
    declarations: [
        NavigationComponent,
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }