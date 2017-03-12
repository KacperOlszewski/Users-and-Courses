import { UserInterface } from '../users/users.interface';

export interface CourseInterface {
    id: string;
    begin: number;
    end: number;
    title: string;
    candidate_limit: number
    candidates: UserInterface[];
}
