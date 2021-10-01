import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-linkedin-view',
  templateUrl: './linkedin-view.component.html',
  styleUrls: ['./linkedin-view.component.css']
})
export class LinkedinViewComponent implements OnInit {

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
  linkedinAccount:any
 

  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCandidatesById();
    this.getCandidateLinkedin();
    this.getUserId()
   }
 

   getCandidateLinkedin() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidate = response.data;
      this.linkedinAccount = response.data.linkedinAccount;
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

}
