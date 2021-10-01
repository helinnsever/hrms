import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployee } from 'src/app/models/system-employee/system-employee';
import { CandidateSchoolService } from 'src/app/services/candidate-school/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-system-employee-update',
  templateUrl: './system-employee-update.component.html',
  styleUrls: ['./system-employee-update.component.css']
})
export class SystemEmployeeUpdateComponent implements OnInit {

  systemEmployee: SystemEmployee;
  user: any;
  firstName: string;
  email: string;
  lastName:string;
  userId:number;
  systemEmployeeEmailUpdate: FormGroup;
  systemEmployeeFirstNameUpdate: FormGroup;
  systemEmployeeLastNameUpdate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private systemEmployeeService: SystemEmployeeService,
    private userService: UserService
    
   
  ) { }

  ngOnInit(): void {
    this.createSystemEmployeeEmailUpdate();
    this.createSystemEmployeeFirstName();
    this.createSystemEmployeeLastName();
    this.getUserId();
    this.getSystemEmployeeById();
  }

  createSystemEmployeeFirstName() {
    this.systemEmployeeFirstNameUpdate = this.formBuilder.group({
     
      firstName:['', Validators.required],
    
     
    });
  }

  createSystemEmployeeLastName() {
    this.systemEmployeeLastNameUpdate= this.formBuilder.group({
      lastName: ['', Validators.required],
     
    });
  }

  createSystemEmployeeEmailUpdate() {
    this.systemEmployeeEmailUpdate = this.formBuilder.group({
      email: ['', Validators.required],
     
    });
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  updateEmail(){
    if (this.systemEmployeeEmailUpdate.valid) {
         
          this.userService.updateEmail(this.systemEmployeeEmailUpdate.value,this.userId).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Email güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

  updateFirstName(){
    if (this.systemEmployeeFirstNameUpdate.valid) {
         
          this.systemEmployeeService.updateFirstName(this.systemEmployeeFirstNameUpdate.value,this.userId).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'İsim güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

  updateLastName(){
    if (this.systemEmployeeLastNameUpdate.valid) {
         
          this.systemEmployeeService.updateLastName(this.systemEmployeeLastNameUpdate.value,this.userId).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Soyisim güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

//   updateSchoool() {
     
//     if (this.systemEmployeeUpdateForm.valid) {
//     localStorage.getItem("user")
//     this.systemEmployeeService.updateSchool(this.candidateSchoolUpdateForm.value.schoolId,this.candidateSchoolId[0]).subscribe(
//        (response: any) => {
         
//         this.toastrService.success(response.message, 'Okul bilgileri güncellendi');
//       },
//       (responseError) => {
//         this.toastrService.error(
//           JSON.stringify(responseError.error.data.errors),
//           'Doğrulama hatası');});
//   } else {
//     this.toastrService.error('Bilgileri eksik girdiniz.');
//   }

// }

  getSystemEmployeeById() {
    this.systemEmployeeService.getSystemEmployeeById(this.getUserId()).subscribe((data: any) => {
      this.systemEmployee = data.data;
      this.userId=data.data.id;
      this.firstName=this.systemEmployee.firstName
      this.lastName=this.systemEmployee.lastName
      this.email=this.systemEmployee.email
      console.log(data.data)
      console.log(this.firstName)
      console.log(this.lastName)
      console.log(this.email)
      console.log(this.userId)
    })
    
  }

}
