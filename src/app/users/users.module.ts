import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { MdlModule , MdlDialogService } from 'angular2-mdl';

import { UsersRoutingModule } from './users.routes'
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { PipesModule } from '../shared/pipes/pipes.module';
import { UserFormComponent } from './create-user/user-form.component';
import { LayoutModule } from "../shared/layout/layout.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdlModule,
        UsersRoutingModule,
        PipesModule,
        ReactiveFormsModule,
        LayoutModule
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    entryComponents: [
        UserFormComponent
    ],
    exports: [
        UsersComponent
    ],
    providers: [
        UsersService,
        MdlDialogService
    ]
})
export class UsersModule {}