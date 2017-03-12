import {Component, Inject, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlDialogReference, IMdlCustomDialog } from 'angular2-mdl';

import { UsersService } from '../users.service';
import { UserInterface } from '../users.interface';

@Component({
    selector: 'psp-user-form',
    templateUrl: './user-form.component.html',
})
export class UserFormComponent implements IMdlCustomDialog {

    public userForm: FormGroup;
    public isPending: boolean;

    public errorMessage = 'this field is required!';
    public successMessage = 'this field is required!';
    public userGender = {
        male: 'm',
        female: 'f'
    };

    constructor(
        private userService: UsersService,
        private formBuilder: FormBuilder,
        private dialog: MdlDialogReference,
        private vcRef: ViewContainerRef,
        @Inject('UserToEdit') private userToEdit: UserInterface
    ) {
        this.setFormValidation(this.userToEdit);
    }

    get viewContainerRef() {
        return this.vcRef;
    }

    submitChanges() {
        const formData = this.userForm.value;
        let userServiceCall = this.userService.createUser(formData);
        this.isPending = true;

        if (this.userToEdit) {
            formData.id = this.userToEdit.id;
            userServiceCall = this.userService.updateUser(formData)
        }

        userServiceCall.subscribe(
            () => this.successHandler(),
            (err: any) => this.errorHandler(err.errors)
        )
        .add(() => {
            this.isPending = false;
            this.dialog.hide();
        });
    }

    detectTouchedAndValid(inputName: string): boolean {
        return this.userForm.get(inputName).valid && this.userForm.get(inputName).touched;
    }

    detectTouchedAndInvalid(inputName: string): boolean {
        return this.userForm.get(inputName).invalid && this.userForm.get(inputName).touched;
    }

    private setFormValidation(userToEdit?: UserInterface) {
        const formGroup = {
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: [this.userGender.male, Validators.required]
        };

        if (userToEdit) {
            formGroup.first_name = [userToEdit.first_name, Validators.required];
            formGroup.last_name = [userToEdit.last_name, Validators.required];
            formGroup.gender = [userToEdit.gender, Validators.required]
        }

        this.userForm = this.formBuilder.group(formGroup);
    }

    private successHandler() {
        this.userForm.reset();
    }

    private errorHandler(error: string[] = []) {

    }
}
