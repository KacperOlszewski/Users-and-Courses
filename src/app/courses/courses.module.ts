import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdlModule, MdlDialogService } from 'angular2-mdl';

import { CoursesRoutingModule } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { RemoveUserFromCandidatesList } from "./remove-user-from-candidates-list/remove-user-from-candidates-list.component";
import { RegisterUserFromUserList } from "./register-user-from-user-list/register-user-from-user-list.component";

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        CoursesRoutingModule,
        MdlModule,
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
