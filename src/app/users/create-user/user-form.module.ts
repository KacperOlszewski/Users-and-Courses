import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { MdlModule } from 'angular2-mdl';

import { UserFormComponent } from './user-form.component';
import { UsersService } from '../users.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MdlModule,
        CommonModule
    ],
    declarations: [
        UserFormComponent
    ],
    exports: [
        UserFormComponent
    ],
    providers: [
        UsersService
    ]
})
export class UserFormModule { }
