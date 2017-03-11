import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserInterface } from './users.interface';
import { MdlDialogService } from "angular2-mdl";
import { UserFormComponent } from './create-user/user-form.component';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'psp-users',
    templateUrl: './users.component.html',
    entryComponents: [
        UserFormComponent
    ],
    styleUrls: ['./users.scss']
})
export class UsersComponent implements OnInit {

    public users: UserInterface[];
    public isPending = true;

    constructor(
        private userService: UsersService,
        private dialogService: MdlDialogService
    ) {

    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
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
        this.showFormDialog(user);
    }

    createUser() {
        this.showFormDialog();
    }

    private showFormDialog(providedUser?: UserInterface) {
        this.dialogService.showCustomDialog({
            component: UserFormComponent,
            providers: [
                UsersService,
                FormBuilder,
                {provide: 'UserToEdit', useValue: providedUser}
            ],
            isModal: true,
            styles: {'width': '350px'},
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
    }
}