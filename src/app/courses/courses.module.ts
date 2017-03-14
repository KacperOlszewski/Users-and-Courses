import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdlModule, MdlDialogService } from 'angular2-mdl';

import { CoursesRoutingModule } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { RemoveUserFromCandidatesList } from './remove-user-from-candidates-list/remove-user-from-candidates-list.component';
import { RegisterUserFromUserList } from './register-user-from-user-list/register-user-from-user-list.component';
import { LayoutModule } from '../shared/layout/layout.module';
import { CreateCourseModule } from './create-course/create-course.module';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        CoursesRoutingModule,
        MdlModule,
        LayoutModule,
        CreateCourseModule
    ],
    declarations: [
        CoursesComponent,
        RemoveUserFromCandidatesList,
        RegisterUserFromUserList
    ],
    entryComponents: [
        RemoveUserFromCandidatesList,
        RegisterUserFromUserList
    ],
    providers: [
        CoursesService,
        MdlDialogService
    ]
})
export class CoursesModule { }
