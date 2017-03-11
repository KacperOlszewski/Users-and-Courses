import { NgModule } from '@angular/core';

import { UserGenderPipe } from './user-gender.pipe';

@NgModule({
    declarations: [
        UserGenderPipe
    ],
    exports: [
        UserGenderPipe
    ]
})
export class PipesModule { }
