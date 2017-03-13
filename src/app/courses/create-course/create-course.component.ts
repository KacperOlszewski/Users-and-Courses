import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CoursesService } from '../courses.service';
import { HttpJsonResponse } from "../../shared/utils/http.helpers";
import { dateValidator, transformTimestamp } from './date.helper';

@Component({
    selector: 'psp-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

    public courseForm: FormGroup;
    public isPending = false;

    public requiredErrorMessage = 'this field is required!';
    public properDateErrorMessage = 'Provide a proper date format: YYYY-MM-DD';
    public notification: string;


    constructor(
        private coursesService: CoursesService,
        private formBuilder: FormBuilder
    ) {
        this.setFormValidation();
    }

    submitChanges() {
        const formData = this.courseForm.value;
        this.isPending = true;
        formData.begin = transformTimestamp(formData.begin);
        formData.end = transformTimestamp(formData.end);

        this.coursesService.createCourse(formData).subscribe(
            () => this.successHandler(),
            (err: HttpJsonResponse) => this.errorHandler(err)
        )
            .add(() => {
                this.isPending = false;
            });
    }

    detectTouchedAndValid(inputName: string): boolean {
        return this.courseForm.get(inputName).valid && this.courseForm.get(inputName).touched;
    }

    detectTouchedAndInvalid(inputName: string): boolean {
        return this.courseForm.get(inputName).invalid && this.courseForm.get(inputName).touched;
    }

    displayErrorMessage(message: string, fieldName: string, ...errors: string[]) {
        const hasErrors = errors.some((errType: string) => {
            return this.courseForm.get(fieldName).hasError(errType);
        });

        return hasErrors ? message : null;
    }

    private setFormValidation() {
        this.courseForm = this.formBuilder.group({
            title: ['', Validators.required],
            begin: [''],
            end: [''],
            candidate_limit: ['', Validators.required]
        });

        this.courseForm.get('begin').setValidators([Validators.required, dateValidator]);
        this.courseForm.get('end').setValidators([Validators.required, dateValidator]);
    }

    private successHandler() {
        this.notification = 'success';
        this.courseForm.reset();
    }

    private errorHandler(error: HttpJsonResponse) {
        this.notification = error.status;
    }
}
