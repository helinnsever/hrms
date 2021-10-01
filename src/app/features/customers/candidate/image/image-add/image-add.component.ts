import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/models/employer/employerResponse';
import { Image } from 'src/app/models/image/image';
import { User } from 'src/app/models/user/user';
import { ImageService } from 'src/app/services/Image/image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  selectedFile: File = null;

  constructor(private imageService: ImageService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  imageAddForm: FormGroup;

  createImageForm() {
    this.imageAddForm = this.formBuilder.group({
      multipartFile: [null, Validators.required],
      userId: [this.getUserId()]
    })
  }

  ngOnInit(): void {
    this.createImageForm();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

    //image preview
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);


  }

  uploadImage() {



   

    if (this.imageAddForm.valid) { 
      
      let formData: any = new FormData();
    formData.append('multipartFile', this.selectedFile);
    formData.append('userId', this.imageAddForm.get('userId').value)
      
      this.imageService.upload(formData, this.getUserId()).subscribe(
         (response: any) => {
         console.log(this.imageAddForm.value);
        this.toastrService.success(response.message, 'image add');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('form geçerli değil');
    }
  }

  getUserId(): number {
    let user = JSON.parse(localStorage.getItem("user"))
    let userId = user.data.id
     
    return userId;
  }

}







