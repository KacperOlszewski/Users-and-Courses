import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users.routes'
import { UsersComponent } from './users.component';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent
    ],
    exports: [
        UsersComponent
    ]
})
export class UsersModule {}