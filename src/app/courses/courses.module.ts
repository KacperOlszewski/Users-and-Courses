import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses.routes';
import { CoursesComponent } from './courses.component';


@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
    ],
    declarations: [
        CoursesComponent
    ]
})
export class CoursesModule { }
