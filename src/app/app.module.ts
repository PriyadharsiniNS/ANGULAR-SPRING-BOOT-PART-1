import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainServiceService } from './main-service.service';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { DeleteCoursesComponent } from './delete-courses/delete-courses.component';
import { FormsModule } from '@angular/forms';
import { ViewInstitutesComponent } from './view-institutes/view-institutes.component';
import { AddInstitutesComponent } from './add-institutes/add-institutes.component';
import { EditInstitutesComponent } from './edit-institutes/edit-institutes.component';
import { DeleteInstitutesComponent } from './delete-institutes/delete-institutes.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';
import { DeleteStudentsComponent } from './delete-students/delete-students.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { DeleteAdmissionComponent } from './delete-admission/delete-admission.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCoursesComponent,
    AddCoursesComponent,
    EditCoursesComponent,
    DeleteCoursesComponent,
    ViewInstitutesComponent,
    AddInstitutesComponent,
    EditInstitutesComponent,
    DeleteInstitutesComponent,
    ViewStudentsComponent,
    AddStudentsComponent,
    EditStudentsComponent,
    DeleteStudentsComponent,
    ViewAdmissionComponent,
    AddAdmissionComponent,
    EditAdmissionComponent,
    DeleteAdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
