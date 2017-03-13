import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { MdlModule } from 'angular2-mdl';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MdlModule
    ],
    declarations: [
        NotificationComponent,
        HeaderComponent
    ],
    exports: [
        NotificationComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }
