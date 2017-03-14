import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseInterface } from './courses.interface';
import { UserInterface } from "../users/users.interface";
import { MdlDialogService } from 'angular2-mdl';
import { RemoveUserFromCandidatesList } from './remove-user-from-candidates-list/remove-user-from-candidates-list.component';
import { RegisterUserFromUserList } from './register-user-from-user-list/register-user-from-user-list.component';
import { UsersService } from '../users/users.service';

type DialogType = 'add' | 'remove';

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
                    console.warn(err)
                }
            )
            .add(() => {
                this.isPending = false;
            });
    }

    hasCandidates(users: UserInterface[]) {
        return users.length > 0;
    }

    showCandidatesToRemove($event: MouseEvent, course: CourseInterface) {
        this.customizeDialog('remove', $event, course);
    }

    showCandidatesToAdd($event: MouseEvent, course: CourseInterface) {
        this.customizeDialog('add', $event, course);
    }

    private customizeDialog(dialogType: DialogType, $event: MouseEvent, course: CourseInterface) {
        const options = {
            add: {
                component: RegisterUserFromUserList,
                providers: [
                    CoursesService,
                    UsersService,
                    {provide: 'Course', useValue: course}
                ]
            },
            remove: {
                component: RemoveUserFromCandidatesList,
                providers: [
                    CoursesService,
                    {provide: 'Course', useValue: course}
                ]
            }
        };

        this.dialogService.showCustomDialog({
            component: options[dialogType].component,
            providers: options[dialogType].providers,
            openFrom: $event,
            isModal: true,
            styles: {'width': '500px'},
            clickOutsideToClose: true,
            enterTransitionDuration: 300,
            leaveTransitionDuration: 300
        });
    }
}
