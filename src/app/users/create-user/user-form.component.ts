import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../users.service';
import { UserInterface } from '../users.interface';

@Component({
    selector: 'psp-user-form',
    templateUrl: './user-form.component.html',
})
export class UserFormComponent {

    @Input() userToEdit: UserInterface;
    userForm: FormGroup;
    isPending: boolean;

    errorMessage = 'this field is required!';
    successMessage = 'this field is required!';
    userGender = {
        male: 'm',
        female: 'f'
    };

    constructor(
        private userService: UsersService,
        private formBuilder: FormBuilder
    ) {
        this.setFormValidation();
    }

    submitChanges() {
        const formData = this.userForm.value;
        this.isPending = true;

        console.log(formData);

        this.userService
            .createUser(formData)
            .subscribe(
                () => this.successHandler(),
                (err: any) => this.errorHandler(err.errors)
            )
            .add(() => {
                this.isPending = false;
            });
    }

    detectTouchedAndValid(inputName: string): boolean {
        return this.userForm.get(inputName).valid && this.userForm.get(inputName).touched;
    }

    detectTouchedAndInvalid(inputName: string): boolean {
        return this.userForm.get(inputName).invalid && this.userForm.get(inputName).touched;
    }

    private setFormValidation(userToEdit?: any) {

        this.userForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: [this.userGender.male, Validators.required]
        });
    }

    private successHandler() {
        this.userForm.reset();

    }

    private errorHandler(error: string[] = []) {

    }
}
