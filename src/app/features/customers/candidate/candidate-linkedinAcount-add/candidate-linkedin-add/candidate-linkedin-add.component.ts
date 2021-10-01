import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-candidate-linkedin-add',
  templateUrl: './candidate-linkedin-add.component.html',
  styleUrls: ['./candidate-linkedin-add.component.css']
})
export class CandidateLinkedinAddComponent implements OnInit {

  user:any;
  candidateLinkedinForm: FormGroup;
  candidateLinkedin:Candidate
  constructor(private formBuilder: FormBuilder,
    private candidateSkillService: CandidateSkillService,
    private router: Router,
    private toastrService: ToastrService,
    private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.createLinkedinAddForm();
    this.getCandidateById();
  }

  createLinkedinAddForm() {
    this.candidateLinkedinForm=this.formBuilder.group({
      userId:[this.getUserId()],
      linkedinAccount: ["",Validators.required],
  })
}


  candidateLinkedinAdd() {
    console.log(this.candidateLinkedinForm.value)
      if (this.candidateLinkedinForm.valid) {
        console.log("burası çalıştı")
       this.candidateService.addLinkedin(this.candidateLinkedin,this.candidateLinkedinForm.value['linkedinAccount']).subscribe(
        (response: any) => {
            this.toastrService.success(response.message, 'Hesap eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
     } else {
      this.toastrService.error('form eksik');
    }
  }

  getUserId(): number {
    this.user= JSON.parse(localStorage.getItem("user"))
    
     return this.user.data.id
  }
  
  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>{
      this.candidateLinkedin = response.data;
      console.log(this.candidateLinkedin)
    })
  }

}
