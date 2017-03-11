import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { routes } from '../../../app.routes';

@Component({
    selector: 'psp-nav-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    public routes: Routes = routes.slice(1);
}
