import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { toJson, handleHttpError, toData } from '../shared/utils/http.helpers';
import { CourseInterface } from './courses.interface';

@Injectable()
export class CoursesService {

    private coursesEndpoint = 'https://private-anon-7e9fab5329-coursemgmt.apiary-mock.com/courses';
    private coursesRegisterEndpoint: string = 'https://private-anon-7e9fab5329-coursemgmt.apiary-mock.com/courses/{courseId}/register';

    constructor(
        private http: Http
    ) {}

    public getCourses(): Observable<CourseInterface[]> {
        return this.http.get(this.coursesEndpoint)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError)
            .map(response => response.courses);
    }

    public createCourse(postData: CourseInterface) {
        return this.http.post(this.coursesEndpoint, postData)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError);
    }

    public removeFromCourse(courseId: string, userId: number) {
        const endpoint = this.coursesRegisterEndpoint.replace('{courseId}', courseId);
        const userToDelete = {user_id: userId};

        return this.http.delete(endpoint, userToDelete)
            .flatMap(toJson)
            .flatMap(toData)
            .catch(handleHttpError);
    }
}
