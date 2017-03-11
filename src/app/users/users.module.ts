import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users.routes'
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        UsersRoutingModule
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