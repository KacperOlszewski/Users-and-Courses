import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserInterface } from './users.interface';

@Component({
    selector: 'psp-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.scss']
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