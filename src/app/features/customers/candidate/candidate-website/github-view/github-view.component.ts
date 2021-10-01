import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-github-view',
  templateUrl: './github-view.component.html',
  styleUrls: ['./github-view.component.css']
})
export class GithubViewComponent implements OnInit {

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
   githubAccount:any
 

  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCandidatesById();
    this.getCandidateGithubs();
    this.getUserId()
   }
 

   getCandidateGithubs() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidate = response.data;
      this.githubAccount = response.data.githubAccount;
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
