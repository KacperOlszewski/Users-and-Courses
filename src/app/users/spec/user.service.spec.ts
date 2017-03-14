import { UsersService } from '../users.service';

describe('Service: UsersService', () => {
    beforeEach(() => {
        this.mockedHttpGetChain = {
            mockedData: {
                json: () => {},
                status: 'success',
                data: {
                    users: [
                        {id: 1}
                    ]
                }
            },
            catch: function() {
                return this;
            },
            map: function(fn: Function) {
                return fn(this.mockedData.data);
            },
            flatMap: function(fn: Function) {
                fn(this.mockedData);
                return this;
            }
        };
        this.httpMock = jasmine.createSpyObj('http', ['get', 'put', 'post']);
        this.userServiceInstance = new UsersService(this.httpMock);
    });

    describe('getUsers', () => {
        it('should send GET request to UsersService with proper endpoint', () => {
            this.httpMock.get.and.callFake(() => this.mockedHttpGetChain);

            this.userServiceInstance.getUsers();
            expect(this.httpMock.get).toHaveBeenCalledWith(UsersService.usersEndpoint);
        });

        it('should return users array if success', () => {
            this.httpMock.get.and.callFake(() => this.mockedHttpGetChain);

            this.userServiceInstance.getUsers();
            expect(this.userServiceInstance.getUsers()).toEqual([
                {id: 1}
            ]);
        });
    });

    describe('upDateUser', () => {
        it('should send GET request to UsersService with proper endpoint', () => {
            this.httpMock.put.and.callFake(() => this.mockedHttpGetChain);
            const user = {
                id: 12
            };

            this.userServiceInstance.updateUser(user);
            expect(this.httpMock.put).toHaveBeenCalledWith(UsersService.usersEndpoint + '/' + user.id, user);
        });
    });

    describe('createUser', () => {
        it('should send GET request to UsersService with proper endpoint', () => {
            this.httpMock.post.and.callFake(() => this.mockedHttpGetChain);
            const user = {
                id: 12
            };

            this.userServiceInstance.createUser(user);
            expect(this.httpMock.post).toHaveBeenCalledWith(UsersService.usersEndpoint, user);
        });
    });
});

