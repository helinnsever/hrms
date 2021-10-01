import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import {MenuItem} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  items: MenuItem[];
  loginForm: FormGroup;
  user: User;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginUserForm();
     
   }

   

  loginUserForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  loginUser() {
    let user: User = this.loginForm.value;
    this.userService.getLogin(user).subscribe(
      (response: any) => {
        if (response.data) {
          this.toastrService.success('Sisteme giriş yapıldı.');
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['']);
        } else {
          this.toastrService.error('Böyle bir kullanıcı bulunmuyor');
        }
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
  }

  goPassword(){
    this.router.navigate["password"]
  }

 
 
      

}