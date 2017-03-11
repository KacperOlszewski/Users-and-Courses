export interface UserInterface {
    id: number;
    gender: Gender;
    first_name: string;
    last_name: string
}

export type Gender =  'm' | 'f';

export class UserGender {
    static m: string = 'male';
    static f: string = 'female'
}
