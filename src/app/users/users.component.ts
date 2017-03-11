import { Component, OnInit } from '@angular/core';
import { UsersService, UserInterface } from './users.service';

@Component({
    selector: 'psp-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

    public users: UserInterface[];

    constructor(
        private userService: UsersService
    ) {}

    ngOnInit() {
        this.userService.getUsers().subscribe(
            u => {
                this.users = u;
            },
            (err) => {
                console.log(err)
            }
        )
    }
}