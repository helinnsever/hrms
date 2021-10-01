import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-navi-candidate-info',
  templateUrl: './navi-candidate-info.component.html',
  styleUrls: ['./navi-candidate-info.component.css']
})
export class NaviCandidateInfoComponent implements OnInit {

  candidateLogged:boolean
  value:any
  candidate:Candidate
  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.getCandidateInfo();
  }

  signOut(){
    localStorage.clear()
  }
  
  getCandidateInfo():Candidate{
    this.value = JSON.parse(localStorage.getItem('user'));
    if (this.value.message === "candidate Logged in"){
      this.candidateService.getCandidateById(this.value.data.id).subscribe((response: any)=>{
        this.candidate = response.data;
      });
      this.candidateLogged = true;
    } else{
      this.candidateLogged = false;
    }
    return this.value.data;
    }
  }

