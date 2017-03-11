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
    public isPending = true;
    public userToEdit: UserInterface;

    constructor(
        private userService: UsersService
    ) {}

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                u => {
                    this.users = u;
                },
                (err) => {
                    console.log(err)
                }
            )
            .add(() => {
                this.isPending = false;
            });
    }

    editUser(user: UserInterface) {
        this.userToEdit = user;
    }
}