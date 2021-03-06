import { Component, OnInit, Inject } from '@angular/core';
import { MdlDialogReference } from 'angular2-mdl';

import { CoursesService } from '../courses.service';
import { CourseInterface } from "../courses.interface";
import {UsersService} from "../../users/users.service";
import {UserInterface} from "../../users/users.interface";

@Component({
    selector: 'psp-register-user',
    templateUrl: './register-user-from-user-list.component.html',
})
export class RegisterUserFromUserList implements OnInit {

    public isPending = true;
    public notification: string;
    public users: UserInterface[];

    constructor(
        private userService: UsersService,
        private coursesService: CoursesService,
        private dialog: MdlDialogReference,
        @Inject('Course') public course: CourseInterface
    ) {}

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                },
                (err) => {
                    this.notification = err.status;
                }
            )
            .add(() => {
                this.isPending = false;
            });
    }

    addUserToCourse(userId: number) {
        this.isPending = true;
        delete this.notification;

        this.coursesService.registerToCourse(this.course.id, userId).subscribe(
            () => {
                this.notification = 'success';
            },
            (err: any) => {
                this.notification = err.status
            }
        )
            .add(() => {
                this.isPending = false;
            });
    }

    closeDialog() {
        this.dialog.hide();
    }
}
