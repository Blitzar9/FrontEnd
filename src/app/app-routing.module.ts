import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddHospitalComponent } from './hospital/add-hospital/add-hospital.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path: '', component : HomeComponent },
  { path : 'contact', component : ContactComponent}, 
  { path : 'about-us', component : AboutUsComponent},
  { path: 'faq', component: FaqComponent },
  { path: 'login', component: LoginComponent},
  { path: 'adminlogin', component: AdminComponent},
  { path: 'registration', component: RegistrationComponent},
  {path:'doctors',component:DoctorComponent},
  {path:'add-doctor',component: AddDoctorComponent},
  {path:'doctor/:id',component: DoctorComponent},
  { path: 'patients', component: PatientComponent},
  { path: 'hospital', component:HospitalComponent},
  { path: 'add-hospital', component:AddHospitalComponent},
  { path: 'add-patient', component:AddPatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
