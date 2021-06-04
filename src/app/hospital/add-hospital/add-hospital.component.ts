import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/hospital.service';
import { Hospital } from 'src/app/hospital';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  hospitals: Hospital[];


  signupForm: FormGroup;
  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      id: new FormControl(null),
      hospitalName: new FormControl(null, Validators.required),
      streetAddress: new FormControl(null, Validators.required),
      streetAddress2: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required),
      contactNo: new FormControl(null, Validators.required)
      
    });
       this.hospitalService.getAllHospitals().subscribe(hospital => {
         this.hospitals = hospital; 
   });
  }

  onSubmit(): void{
    //this.countfromChild.emit(this.countfromParent + 5);
    this.hospitalService.createHospital(this.signupForm.value).subscribe(data =>{
      console.log("Hospital Data added successfully"+data);
      this.router.navigate(['/hospitals']);
    });
  //  console.log(this.signupForm);
  }


}
