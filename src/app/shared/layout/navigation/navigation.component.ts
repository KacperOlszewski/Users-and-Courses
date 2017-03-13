import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { MdlLayoutComponent } from 'angular2-mdl';

import { routes } from '../../../app.routes';

@Component({
    selector: 'psp-nav-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Input() mdl: MdlLayoutComponent;
    public routes: Routes = routes.slice(1);
}
