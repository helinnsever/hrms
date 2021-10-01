import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.component.html',
  styleUrls: ['./cv-update.component.css']
})
export class CvUpdateComponent implements OnInit {

  user: any;
  candidate: Candidate;
  updateCoverLetterForm: FormGroup;
  updateCvTitleForm:FormGroup;
  cv: number[]=[];
  id:number;
  cvs:Cv[]=[]
  selectedLevel: string;
 
  constructor(private formBuilder: FormBuilder,
    private cvService: CvService,
    private toastrService: ToastrService,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getUserId();
    this.getCandidateById();
    this.createCoverLetterUpdateForm();
    this.createTitleUpdateForm();
  }

  createCoverLetterUpdateForm() {
    this.updateCoverLetterForm=this.formBuilder.group({
      cvId:[this.id],
      coverLetter: ["",Validators.required],
  })
  }

  createTitleUpdateForm() {
    this.updateCvTitleForm=this.formBuilder.group({
      cvId:[this.id],
      title: ["",Validators.required],
  })
  }

  getUserId(): number {
    this.user= JSON.parse(localStorage.getItem("user"))
    
     return this.user.data.id
  }
  
  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>{
      this.cvs=response.data.cvs
      this.cv= response.data.cvs.map(o=>o.id)
      console.log(this.cv)
    })
  }

  updateCoverLetter(){
    if (this.updateCoverLetterForm.valid) {
         console.log("calısıyor")
         this.cvService.updateCoverLetter(this.updateCoverLetterForm.value['coverLetter'],this.id).subscribe((response:any)=>{
         
          
            
               
              this.toastrService.success(response.message, 'Cover Letter güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }
  
  }

  updateCvTitle(){
    if (this.updateCvTitleForm.valid) {
         console.log("calısıyor")
         this.cvService.updateCvTitle(this.updateCvTitleForm.value['title'],this.id).subscribe((response:any)=>{
         
          
            
               
              this.toastrService.success(response.message, 'Cv Title güncellendi');
            },
            (responseError) => {
              this.toastrService.error(
                JSON.stringify(responseError.error.data.errors),
                'Doğrulama hatası');});
        } else {
          this.toastrService.error('Bilgileri eksik girdiniz.');
        }
  
  }

  cathcId(id:number){
     
    this.id=id;


  }

  deleteCv(){
    this.cvService.deleteCv(this.id).subscribe((response:any)=>{
         
          
            
               
      this.toastrService.success(response.message, 'Cv başarıyla silindi');
    },
    (responseError) => {
      this.toastrService.error(
        JSON.stringify(responseError.error.data.errors),
        'Doğrulama hatası');});
  
  
  }
  

}
