import { Response } from '@angular/http';
import { Observable } from 'rxjs';

class HttpStatusGroup {
    static readonly SUCCESS = 'success';
    static readonly ERROR = 'error';
}

export interface HttpJsonResponse {
    status: HttpStatusGroup;
    data: any;
}

export function toJson(res: Response): Observable<any> {
    try {
        return Observable.of(res.json());
    } catch (e) {
        return Observable.throw(e);
    }
}

export function toData(response: HttpJsonResponse) {
    return response.status === HttpStatusGroup.SUCCESS
        ? Observable.of(response.data)
        : Observable.throw(response);
}

export function handleHttpError(error: Response | any) {
    return Observable.throw({error, isHttpError: (error instanceof Response)});
}