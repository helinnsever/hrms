import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
import { User } from 'src/app/models/user/user';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {

  user: any;
  candidates: Candidate[] = []
  candidate: Candidate;
  cvs: any;
id:number;


  constructor(private cvService: CvService,
    private candidateService: CandidateService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,) { }


  ngOnInit(): void {

    this.getCandidatesById();
    this.getUserId();
    this.getCvsById();
  }

  getCandidatesById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      this.candidate = data.data;
      console.log(this.candidate)
      this.cvs = data.data.cvs

    })
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  deleteCvById(id: number) {
    this.cvService.deleteCv(id).subscribe((response: any) => {
      this.toastrService.success("Özgeçmiş silindi.");
      setTimeout(() => window.location.reload(), 1400);
    })
  }

  catchCvId(id: number){
    this.id = id;
  }

  getCvsById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any)=>{
      
      this.cvs = response.data.cvs;
    })
  }

}
