import { UserInterface } from '../users/users.interface';

export interface CourseInterface {
    id: string;
    begin: string;
    end: string;
    title: string;
    candidate_limit: number
    candidates: UserInterface[];
}
