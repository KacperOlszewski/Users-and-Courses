import { UsersComponent } from '../users.component';

describe('TEST', () => {

    beforeEach(() => {
        this.httpMock = {};

        this.usersComponentInstance = new UsersComponent(this.httpMock);
    });

    describe('User Component', () => {
        it('should be defined', () => {
            expect(this.usersComponentInstance).toBeDefined();
        });

        it('should be TRUE', () => {
            expect(true).toBe(true);
        });
    })
});