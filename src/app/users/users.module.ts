import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdlModule } from 'angular2-mdl';

import { UsersRoutingModule } from './users.routes'
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        MdlModule,
        UsersRoutingModule,
        PipesModule
    ],
    declarations: [
        UsersComponent
    ],
    exports: [
        UsersComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {}