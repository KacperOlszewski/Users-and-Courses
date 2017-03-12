import { Component, Inject } from '@angular/core';
import { MdlDialogReference } from 'angular2-mdl';

import { CoursesService } from '../courses.service';
import { CourseInterface } from "../courses.interface";
import {HttpJsonResponse} from "../../shared/utils/http.helpers";

@Component({
    selector: 'psp-remove-user',
    templateUrl: './remove-user-from-candidates-list.component.html',
})
export class RemoveUserFromCandidatesList {

    public isPending = false;
    public notification: string;

    constructor(
        private coursesService: CoursesService,
        private dialog: MdlDialogReference,
        @Inject('Course') public course: CourseInterface
    ) {}

    removeFromCourse(userId: number) {
        this.isPending = true;
        delete this.notification;

        this.coursesService.removeFromCourse(this.course.id, userId).subscribe(
            () => {
                this.notification = 'success';
            },
            (err: HttpJsonResponse) => {
                this.notification = err.status;
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
