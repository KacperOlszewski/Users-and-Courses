import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";

import { toJson, handleHttpError, toData } from '../shared/utils/http.helpers';

@Injectable()
export class UsersService {

    private getUserEndpoint = 'https://private-anon-7e9fab5329-coursemgmt.apiary-mock.com/users';

    constructor(
        private http: Http
    ) {}

    public getUsers(): Observable<UserInterface[]> {
        return this.http.get(this.getUserEndpoint)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError)
            .map(response => response.users);
    }
}

export interface UserInterface {
    id: number;
    gender: string;
    first_name: string;
    last_name: string
}