import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { LayoutModule } from '../../shared/layout/layout.module';

import { CreateCourseComponent } from './create-course.component';
import { CoursesService } from '../courses.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MdlModule,
        CommonModule,
        LayoutModule
    ],
    declarations: [
        CreateCourseComponent
    ],
    exports: [
        CreateCourseComponent
    ],
    providers: [
        CoursesService
    ]
})
export class CreateCourseModule { }
