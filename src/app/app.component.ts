import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav>
          <a routerLink="users" routerLinkActive="active">users</a>
          <a routerLink="courses" routerLinkActive="active">courses</a>
        </nav>

        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
