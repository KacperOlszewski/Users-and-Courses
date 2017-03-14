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
                            setErrors: jasmine.createSpy('setValidators')
                        };
                    }),
                    value: {formValuesMock: 'mocks'},
                    reset: jasmine.createSpy('reset')
                };
            }
        };
        this.dialogService = {};
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
    });
});
