import { UserFormComponent } from '../user-form.component';

describe('Component: UserFormComponent', () => {

    beforeEach(() => {
        this.userService = {};
        this.FormBuilder = {
            group: () => {
                return {
                    get: jasmine.createSpy('get').and.callFake(() => {
                        return {
                            setValidators: jasmine.createSpy('setValidators'),
                            setErrors: jasmine.createSpy('setValidators'),
                            touched: true,
                            valid: true,
                            invalid: false
                        };
                    }),
                    value: {formValuesMock: 'mocks'},
                    reset: jasmine.createSpy('reset')
                };
            }
        };
        this.dialogService = {
            hide: () => {}
        };
        this.providedUser = null;
        this.UserFormComponentInstance = new UserFormComponent(
            this.userService,
            this.FormBuilder,
            this.dialogService,
            this.providedUser
        );
    });

    describe('submitChanges', () => {
        it('expect create user request to have been called with params, if no user provided', () => {
            const createUserSubscribeMock = jasmine.createSpyObj('createUser', ['subscribe']);
            this.userService.createUser = jasmine.createSpy('create');
            this.userService.createUser.and.returnValue(createUserSubscribeMock);
            createUserSubscribeMock.subscribe.and.callFake((cb: Function) => {
                cb();
                return {add: () => {}};
            });

            this.UserFormComponentInstance.submitChanges();

            expect(this.UserFormComponentInstance.isPending).toBe(true);
            expect(this.userService.createUser).toHaveBeenCalledWith({formValuesMock: 'mocks'});
        });

        it('expect update user request to have been called with params, if user is provided', () => {
            this.UserFormComponentInstance.userToEdit = {id: 1};
            const updateUserSubscribeMock = jasmine.createSpyObj('updateUser', ['subscribe']);
            this.userService.updateUser = jasmine.createSpy('update');
            this.userService.createUser = jasmine.createSpy('create');
            this.userService.updateUser.and.returnValue(updateUserSubscribeMock);
            updateUserSubscribeMock.subscribe.and.callFake((cb: Function) => {
                cb();
                return {add: () => {}};
            });

            this.UserFormComponentInstance.submitChanges();

            expect(this.UserFormComponentInstance.isPending).toBe(true);
            expect(this.userService.updateUser).toHaveBeenCalledWith({formValuesMock: 'mocks', id: this.UserFormComponentInstance.userToEdit.id});
        });

        it('on success expect to set notification, reset form, and hide dialog + pending to false', (done) => {
            const createUserSubscribeMock = jasmine.createSpyObj('createUser', ['subscribe']);
            const addMock = jasmine.createSpy('add');

            this.userService.createUser = jasmine.createSpy('create');
            this.userService.createUser.and.returnValue(createUserSubscribeMock);
            this.dialogService.hide = jasmine.createSpy('hide');

            createUserSubscribeMock.subscribe.and.callFake((cb: Function) => {
                cb();
                return {add: addMock};
            });
            addMock.and.callFake((cb: Function) => {
                cb();
            });

            this.UserFormComponentInstance.submitChanges();

            expect(this.UserFormComponentInstance.isPending).toBe(false);
            expect(this.UserFormComponentInstance.notification).toBe('success');
            expect(this.UserFormComponentInstance.userForm.reset).toHaveBeenCalled();

            setTimeout(() => {
                expect(this.dialogService.hide).toHaveBeenCalled();
                done();
            }, 1500);
        });

        it('on error expect to set notification + pending to false', () => {
            const createUserSubscribeMock = jasmine.createSpyObj('createUser', ['subscribe']);
            const addMock = jasmine.createSpy('add');
            const errorMock = {status: 'error'};

            this.userService.createUser = jasmine.createSpy('create');
            this.userService.createUser.and.returnValue(createUserSubscribeMock);

            createUserSubscribeMock.subscribe.and.callFake((cb: Function, errCb: Function) => {
                errCb(errorMock);
                return {add: addMock};
            });
            addMock.and.callFake((cb: Function) => {
                cb();
            });

            this.UserFormComponentInstance.submitChanges();

            expect(this.UserFormComponentInstance.isPending).toBe(false);
            expect(this.UserFormComponentInstance.notification).toBe(errorMock.status);
            expect(this.UserFormComponentInstance.userForm.reset).not.toHaveBeenCalled();
        });
    });

    describe('detectTouchedAndValid', () => {
        it('should return true', () => {
            expect(this.UserFormComponentInstance.detectTouchedAndValid('first_name')).toBe(true);
        });
    });

    describe('detectTouchedAndInvalid', () => {
        it('should return true', () => {
            expect(this.UserFormComponentInstance.detectTouchedAndInvalid('last_name')).toBe(false);
        });
    });
});
