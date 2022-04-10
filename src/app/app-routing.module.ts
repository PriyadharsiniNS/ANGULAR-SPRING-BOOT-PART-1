import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AddInstitutesComponent } from './add-institutes/add-institutes.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DeleteAdmissionComponent } from './delete-admission/delete-admission.component';
import { DeleteCoursesComponent } from './delete-courses/delete-courses.component';
import { DeleteInstitutesComponent } from './delete-institutes/delete-institutes.component';
import { DeleteStudentsComponent } from './delete-students/delete-students.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { EditInstitutesComponent } from './edit-institutes/edit-institutes.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewInstitutesComponent } from './view-institutes/view-institutes.component';
import { ViewStudentsComponent } from './view-students/view-students.component';


const routes: Routes = [
  {'path' : 'View Courses', component : ViewCoursesComponent},
  {'path' : 'Add Courses' , component : AddCoursesComponent},
  {'path' : 'Edit Courses' , component : EditCoursesComponent},
  {'path' : 'Delete Courses' , component : DeleteCoursesComponent},
  {'path' : 'View Institutes', component : ViewInstitutesComponent},
  {'path' : 'Add Institutes', component : AddInstitutesComponent},
  {'path' : 'Edit Institutes', component : EditInstitutesComponent},
  {'path' : 'Delete Institutes', component : DeleteInstitutesComponent},
  {'path' : 'View Students' , component : ViewStudentsComponent},
  {'path' : 'Add Students', component : AddStudentsComponent},
  {'path' : 'Edit Students', component : EditStudentsComponent},
  {'path' : 'Delete Students', component : DeleteStudentsComponent},
  {'path' : 'View Admissions' , component : ViewAdmissionComponent},
  {'path' : 'Add Admissions' , component : AddAdmissionComponent},
  {'path' : 'Edit Admissions' , component : EditAdmissionComponent},
  {'path' : 'Delete Admissions' , component : DeleteAdmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
