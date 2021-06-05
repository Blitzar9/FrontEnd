import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { PatientComponent } from './patient/patient.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddHospitalComponent } from './hospital/add-hospital/add-hospital.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { UpdateHospitalComponent} from './update-hospital/update-hospital.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    DoctorComponent,
    AddDoctorComponent,
    RegistrationComponent,
    PatientComponent,
    AddPatientComponent,
    HospitalComponent,
    AddHospitalComponent,
    UpdateDoctorComponent,
    UpdateHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, NgxPaginationModule,
    NgxSpinnerModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }