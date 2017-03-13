import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';

const routes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'create', component: CreateCourseComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}