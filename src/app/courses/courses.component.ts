import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseInterface } from './courses.interface';
import { UserInterface } from "../users/users.interface";
import { MdlDialogService } from 'angular2-mdl';
import { RemoveUserFromCandidatesList } from "./remove-user-from-candidates-list/remove-user-from-candidates-list.component";

@Component({
    selector: 'psp-courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {

    public courses: CourseInterface[];
    public isPending = true;

    constructor(
        private coursesService: CoursesService,
        private dialogService: MdlDialogService
    ) {}

    ngOnInit() {
        this.coursesService.getCourses()
            .subscribe(
                courses => {
                    this.courses = courses;
                },
                (err) => {
                    console.log(err)
                }
            )
            .add(() => {
                this.isPending = false;
            });
    }

    hasCandidates(users: UserInterface[]) {
        return users.length > 0;
    }

    showCandidatesList($event: MouseEvent, course: CourseInterface) {
        this.dialogService.showCustomDialog({
            component: RemoveUserFromCandidatesList,
            providers: [
                CoursesService,
                {provide: 'Course', useValue: course}
            ],
            openFrom: $event,
            isModal: true,
            styles: {'width': '500px'},
            clickOutsideToClose: true,
            enterTransitionDuration: 400,
            leaveTransitionDuration: 400
        });
    }
}