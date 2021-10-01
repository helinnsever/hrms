import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { Department } from 'src/app/models/department/department';
import { Language } from 'src/app/models/language/language';
import { Position } from 'src/app/models/position/position';
import { School } from 'src/app/models/school/school';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';


@Component({
  selector: 'app-candidate-cv-view',
  templateUrl: './candidate-cv-view.component.html',
  styleUrls: ['./candidate-cv-view.component.css']
})
export class CandidateCvViewComponent implements OnInit {

  candidates: Candidate[] = []
  candidate: Candidate;
  candidateLanguages: any
  candidateJobExperiences: any
  candidateSchools: any
  candidateSkills: any
  cvs: any




  constructor(private cvService: CvService,
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {



    this.activatedRoute.params.subscribe(params => {
      this.getCandidatesById(params["candidateId"])
    })
    this.activatedRoute.params.subscribe(params => {
      this.getCandidateLanguages(params["candidateId"])
    })
    this.activatedRoute.params.subscribe(params => {
      this.getCandidateJobExperiences(params["candidateId"])
    })

    this.activatedRoute.params.subscribe(params => {
      this.getCandidateSkills(params["candidateId"])
    })

    this.activatedRoute.params.subscribe(params => {
      this.getCandidateSchools(params["candidateId"])
    })
    this.activatedRoute.params.subscribe(params => {
      this.getCandidateCv(params["candidateId"])
    })

  }
 
  getCandidatesById(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((data: any) => {
      this.candidate = data.data;
      console.log(this.candidate)

    })
  }

  getCandidateLanguages(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
       this.candidate = response.data;
       this.candidateLanguages = response.data.candidateLanguages;

      });

  }

  getCandidateJobExperiences(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
     this.candidate = response.data;
      this.candidateJobExperiences = response.data.candidateJobExperiences;
       });
   }

  getCandidateSkills(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
       this.candidate = response.data;
      this.candidateSkills = response.data.candidateSkills;
     });

  }

  getCandidateSchools(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
       this.candidate = response.data;
      this.candidateSchools = response.data.candidateSchools
     });

  }

  getCandidateCv(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
       this.candidate = response.data;
      this.cvs = response.data.cvs
     });

  }










}
