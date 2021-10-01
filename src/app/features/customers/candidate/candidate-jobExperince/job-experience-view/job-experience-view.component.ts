import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { Candidate } from 'src/app/models/candicated/candidate/candidate';
 import { CandidateJobExperienceService } from 'src/app/services/candidate-job-experience/candidate-job-experience.service';
 import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-job-experience-view',
  templateUrl: './job-experience-view.component.html',
  styleUrls: ['./job-experience-view.component.css']
})
export class JobExperienceViewComponent implements OnInit {

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
   candidateJobExperiences:any
id: number;

  constructor(private candidateService: CandidateService,
    private candidateJobExperienceService:CandidateJobExperienceService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getUserId()
    this.getCandidatesById()
    this.getCandidateJobExperiences()
    
  }
  
  getCandidateJobExperiences(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
     this.candidate = response.data;
      this.candidateJobExperiences = response.data.candidateJobExperiences;
  
     
      });
   
  }
  
  getCandidatesById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }

    getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  deleteJobExperienceById(id: number) {
    this.candidateJobExperienceService.removeFromJobExperiences(id).subscribe((response: any) => {
      this.toastrService.success("Okul silindi.", "Başarılı!");
      setTimeout(() => window.location.reload(), 1400);
    });
  }
  
  catchJobExperienceById(id:number){
    this.id=id;
    console.log(this.id)
    console.log("burası calişti")
  }

 
}
