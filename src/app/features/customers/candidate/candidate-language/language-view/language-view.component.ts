import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Language } from 'src/app/models/language/language';
import { CandidateLanguageService } from 'src/app/services/candidate-language/candidate-language.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {

  id:number
  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
  candidateLanguages:any
  constructor(private candidateService: CandidateService,
    private candidateLanguageService:CandidateLanguageService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getUserId()
    this.getCandidatesById()
    this.getCandidateLanguage()
     
  }

  getCandidateLanguage(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
     this.candidate = response.data;
      this.candidateLanguages = response.data.candidateLanguages;
  
     
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

  deleteLanguageById(id: number) {
    this.candidateLanguageService.removeFromLanguages(id).subscribe((response: any) => {
      this.toastrService.success("Okul silindi.", "Başarılı!");
      setTimeout(() => window.location.reload(), 1400);
    });
  }
  
  catchLanguageById(id:number){
    this.id=id;
    console.log(this.id)
    console.log("burası calişti")
  }


}
