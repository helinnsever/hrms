import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-password-update',
  templateUrl: './user-password-update.component.html',
  styleUrls: ['./user-password-update.component.css']
})
export class UserPasswordUpdateComponent implements OnInit {

  userPasswordUpdate: FormGroup;
  user: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService
    
   
  ) { }

  ngOnInit(): void {
    this.createUserPassword();
    
    this.getUserId();
    
  }

  createUserPassword() {
    this.userPasswordUpdate = this.formBuilder.group({
     
      oldPassword:['', Validators.required],
      password:['', Validators.required],
     
    });
  }

  updatePassword(){
    if (this.userPasswordUpdate.valid) {
         
          this.userService.updatePassword(this.userPasswordUpdate.value['oldPassword'],this.userPasswordUpdate.value['password'],this.getUserId()).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Password güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    return this.user.data.id;
  }

}
