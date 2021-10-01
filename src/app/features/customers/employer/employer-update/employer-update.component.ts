import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {

  employer:Employer;
  user:any;
  employerCompanyUpdate: FormGroup;
  employerEmailAndWebsite: FormGroup;
  employerPhoneNumber: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private employerService:EmployerService
   
  ) { }
  ngOnInit(): void {
    this.createEmployerCompanyUpdate();
    this.createEmployerPhoneNumberUpdate();
    this.createEmailandWebsiteUpdate();
    this.getUserId();
  }

  createEmployerCompanyUpdate() {
    this.employerCompanyUpdate = this.formBuilder.group({
     
      companyName:['', Validators.required],
    
     
    });
  }

  createEmployerPhoneNumberUpdate() {
    this.employerPhoneNumber= this.formBuilder.group({
      phoneNumber: ['', Validators.required],
     
    });
  }

  createEmailandWebsiteUpdate() {
    this.employerEmailAndWebsite = this.formBuilder.group({
      email: ['', Validators.required],
      website:['', Validators.required]
     
    });
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  updateCompanyName(){
    if (this.employerCompanyUpdate.valid) {
         console.log("calısıyor")
          this.employerService.updateCompanyName(this.employerCompanyUpdate.value,this.getUserId()).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Şirket ismi güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

  updatePhoneNumber(){
    if (this.employerPhoneNumber.valid) {
         
          this.employerService.updatePhoneNumber(this.employerPhoneNumber.value,this.getUserId()).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Telefon numarası güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

  updateEmailAndWebsite(){
    if (this.employerEmailAndWebsite.valid) {
         
          this.employerService.updateEmailAndWebsite(this.employerEmailAndWebsite.value['email'],this.employerEmailAndWebsite.value['website'],this.getUserId()).subscribe(
             (response: any) => {
               
              this.toastrService.success(response.message, 'Email ve Website güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }

  }

}
