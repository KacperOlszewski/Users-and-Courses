import { Component, Inject } from '@angular/core';
import { MdlDialogReference } from 'angular2-mdl';

import { CoursesService } from '../courses.service';
import { CourseInterface } from "../courses.interface";

@Component({
    selector: 'psp-remove-user',
    templateUrl: './remove-user-from-candidates-list.component.html',
})
export class RemoveUserFromCandidatesList {

    public isPending: boolean;

    constructor(
        private coursesService: CoursesService,
        private dialog: MdlDialogReference,
        @Inject('Course') public course: CourseInterface
    ) {}

    removeFromCourse(userId: number) {
        this.isPending = true;
        this.coursesService.removeFromCourse(this.course.id, userId).subscribe(
            () => {

            },
            (err: any) => {}
        )
        .add(() => {
            this.isPending = false;
        });
    }

    closeDialog() {
        this.dialog.hide();
    }
}
