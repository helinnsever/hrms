import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-candidate-website',
  templateUrl: './candidate-website.component.html',
  styleUrls: ['./candidate-website.component.css']
})
export class CandidateWebsiteComponent implements OnInit {

  user:any;
  candidateGithubForm: FormGroup;
  candidateGithub:Candidate
  constructor(private formBuilder: FormBuilder,
    private candidateSkillService: CandidateSkillService,
    private router: Router,
    private toastrService: ToastrService,
    private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.createGithubAddForm();
    this.getCandidateById();
  }


  createGithubAddForm() {
    this.candidateGithubForm=this.formBuilder.group({
      userId:[this.getUserId()],
      githubAccount: ["",Validators.required],
  })
}

candidateGithubAdd() {
  console.log(this.candidateGithubForm.value)
    if (this.candidateGithubForm.valid) {
      console.log("burası çalıştı")
     this.candidateService.addGithub(this.candidateGithub,this.candidateGithubForm.value['githubAccount']).subscribe(
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
    this.candidateGithub = response.data;
    console.log(this.candidateGithub)
  })
}



}
