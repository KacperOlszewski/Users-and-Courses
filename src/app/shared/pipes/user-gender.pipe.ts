import { Pipe, PipeTransform } from '@angular/core';
import { UserGender, Gender } from '../../users/users.interface';

@Pipe(
    { name: 'gender' }
)
export class UserGenderPipe implements PipeTransform {
    transform(type: Gender) {
        return UserGender[type];
    }
}