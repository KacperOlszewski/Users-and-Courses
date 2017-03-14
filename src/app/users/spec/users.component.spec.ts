import { UsersComponent } from '../users.component';
import { UsersService } from '../users.service';
import { UserFormComponent } from '../create-user/user-form.component';
import { FormBuilder } from '@angular/forms';

describe('Component: UsersComponent', () => {

    beforeEach(() => {
        this.userService = {};
        this.dialogService = {};

        this.usersComponentInstance = new UsersComponent(this.userService, this.dialogService);
    });

    describe('ngOnInit', () => {

        it('should set users after successful call, and set pending to false', () => {
            this.userService.getUsers = jasmine.createSpy('getUsers');

            const getUsersSubscribeMock = jasmine.createSpyObj('saveChanges', ['subscribe']);
            const addMock = jasmine.createSpy('add');
            const UsersMock = [{id: 1}, {id: 2}];

            this.userService.getUsers.and.returnValue(getUsersSubscribeMock);
            getUsersSubscribeMock.subscribe.and.callFake((cb: Function) => {
                cb(UsersMock);
                return {add: addMock};
            });
            addMock.and.callFake((cb: Function) => {
                cb();
            });

            this.usersComponentInstance.ngOnInit();

            expect(this.usersComponentInstance.isPending).toBe(false);
            expect(this.usersComponentInstance.users).toBe(UsersMock);
        });

        it('should call error log, and set pending to false', () => {
            this.userService.getUsers = jasmine.createSpy('getUsers');
            spyOn(console, 'log');

            const getUsersSubscribeMock = jasmine.createSpyObj('saveChanges', ['subscribe']);
            const addMock = jasmine.createSpy('add');

            const errorMock = {status: 'error'};

            this.userService.getUsers.and.returnValue(getUsersSubscribeMock);
            getUsersSubscribeMock.subscribe.and.callFake((cb: Function, errCb: Function) => {
                errCb(errorMock);
                return {add: addMock};
            });
            addMock.and.callFake((cb: Function) => {
                cb();
            });

            this.usersComponentInstance.ngOnInit();

            expect(this.usersComponentInstance.isPending).toBe(false);
            expect(console.log).toHaveBeenCalledWith(errorMock);
        });
    });

    describe('editUser', () => {
        it('should call dialog service with certain params', () => {
            const candidates: any[] = [{id: 1}];
            const mouseEvent = {};
            this.dialogService.showCustomDialog = jasmine.createSpy('showDialog');

            this.usersComponentInstance.editUser(mouseEvent, candidates);
            expect(this.dialogService.showCustomDialog).toHaveBeenCalledWith(
                {
                    component: UserFormComponent,
                    providers: [
                        UsersService,
                        FormBuilder,
                        {provide: 'UserToEdit', useValue: candidates}
                    ],
                    openFrom: mouseEvent,
                    isModal: true,
                    styles: {'width': '400px'},
                    clickOutsideToClose: true,
                    enterTransitionDuration: 400,
                    leaveTransitionDuration: 400
                }
            );
        });
    });

    describe('createUser', () => {
        it('should call dialog service with certain params', () => {
            const mouseEvent = {};
            this.dialogService.showCustomDialog = jasmine.createSpy('showDialog');

            this.usersComponentInstance.createUser(mouseEvent);
            expect(this.dialogService.showCustomDialog).toHaveBeenCalledWith(
                {
                    component: UserFormComponent,
                    providers: [
                        UsersService,
                        FormBuilder,
                        {provide: 'UserToEdit', useValue: undefined}
                    ],
                    openFrom: mouseEvent,
                    isModal: true,
                    styles: {'width': '400px'},
                    clickOutsideToClose: true,
                    enterTransitionDuration: 400,
                    leaveTransitionDuration: 400
                }
            );
        });
    });
});