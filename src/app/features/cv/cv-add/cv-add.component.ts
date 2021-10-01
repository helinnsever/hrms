import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { CandidateSkillResponse } from 'src/app/models/candicated/candidate-skill/cadidate-skill-response';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateJobExperienceService } from 'src/app/services/candidate-job-experience/candidate-job-experience.service';
import { CandidateLanguageService } from 'src/app/services/candidate-language/candidate-language.service';
import { CandidateSchoolService } from 'src/app/services/candidate-school/candidate-school.service';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';


@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  user: any;
  cvAddForm: FormGroup;
  candidateJobExperienceIds: number[] = [];
  candidateLanguageIds: number[] = [];
  candidateSchoolIds: number[] = [];
  candidateSkillIds: number[] = [];

  
  constructor(private cvService: CvService, private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private candidateJobExperienceService: CandidateJobExperienceService,
    private candidateLanguageService: CandidateLanguageService,
    private candidateSchoolService: CandidateSchoolService,
    private candidateSkillService: CandidateSkillService,
    private candidateService: CandidateService
   ) { }

  ngOnInit(): void {
    this.createCvAddForm();
    this.getCandidateSkillIds();
    this.getCandidateSchoolIds();
    this.getCandidateJobExperienceIds();
    this.getCandidateLanguageIds();
    this.getUserId();
  }

  createCvAddForm() {
    this.cvAddForm = this.formBuilder.group({
      candidateId:[this.getUserId()],
      candidateJobExperienceIds: [this.getCandidateJobExperienceIds()],
      candidateLanguageIds:[this.getCandidateLanguageIds()],
      candidateSchoolIds: [this.getCandidateSchoolIds()],
      candidateSkillIds: [this.getCandidateSkillIds()],
      coverLetter: ['', Validators.required],
      title: ['', Validators.required],
      
  })

}

cvAdd() {
  if (this.cvAddForm.valid) {
  
     this.cvService.add(this.cvAddForm.value).subscribe(
       (response: any) => {
         console.log(this.cvAddForm.value);
         
         this.toastrService.success(response.message, 'CV eklendi');
       },
       (responseError) => {
         this.toastrService.error(
           JSON.stringify(responseError.error.data.errors),
           'Doğrulama hatası'
         );
       }
     );
   }else {
    this.toastrService.error('Hata.');
  }
} 

getCandidateJobExperienceIds(): number[] {
  this.candidateService
    .getCandidateById(this.getUserId())
    .subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateJobExperiences.length; i++) {
        this.candidateJobExperienceIds[i] = response.data.candidateJobExperiences[i].id;
      }
    });
  return this.candidateJobExperienceIds;
}

getCandidateLanguageIds(): number[] {
  this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateLanguages.length; i++) {
        this.candidateLanguageIds[i] = response.data.candidateLanguages[i].id;
      }
    });
  return this.candidateLanguageIds;
}

getCandidateSchoolIds(): number[] {
  this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSchools.length; i++) {
        this.candidateSchoolIds[i] = response.data.candidateSchools[i].id;
      }
    });
  return this.candidateSchoolIds;
}

getCandidateSkillIds(): number[] {
  this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSkills.length; i++) {
        this.candidateSkillIds[i] = response.data.candidateSkills[i].id;
      }
    });
  return this.candidateSkillIds;
}

getUserId(): number {
  this.user = JSON.parse(localStorage.getItem('user'));
  return this.user.data.id;
}
}
  

  

 


