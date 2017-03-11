import { Pipe, PipeTransform } from '@angular/core';
import { UserGender, Gender } from '../users.interface';

@Pipe(
    { name: 'gender' }
)
export class GenderPipe implements PipeTransform {
    transform(type: Gender) {
        return UserGender[type];
    }
}