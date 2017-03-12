import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { toJson, handleHttpError, toData } from '../shared/utils/http.helpers';
import { UserInterface } from './users.interface';

@Injectable()
export class UsersService {

    private usersEndpoint = 'https://private-anon-7e9fab5329-coursemgmt.apiary-mock.com/users';

    constructor(
        private http: Http
    ) {}

    public getUsers(): Observable<UserInterface[]> {
        return this.http.get(this.usersEndpoint)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError)
            .map(response => response.users);
    }

    public createUser(postData: UserInterface) {
        return this.http.post(this.usersEndpoint, postData)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError);
    }

    public updateUser(postData: UserInterface) {
        console.log(this.usersEndpoint +'/'+ postData.id);

        return this.http.put(this.usersEndpoint +'/'+ postData.id, postData)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError);
    }
}
