 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.css']
})
export class SkillViewComponent implements OnInit {

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
  candidateSkills:any
  candidateSkillIds: Skill[]=[]
  id:number;

  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
    private candidateSkillService: CandidateSkillService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCandidatesById();
    this.getCandidateSkills();
    this.getUserId()
   }
 

  

    getCandidatesById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }

  getCandidateSkills() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidateSkills = response.data.candidateSkills;
      
      console.log(this.candidateSkills)
    })
  }
  

  
  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  deleteSkillsById(id: number) {
    this.candidateSkillService.removeFromSkills(id).subscribe((response: any) => {
      this.toastrService.success("Yetenek silindi.", "Başarılı!");
      setTimeout(() => window.location.reload(), 1400);
    });
  }
  
  catchSkillId(id:number){
    this.id=id;
    console.log(this.id)
    console.log("burası calişti")
  } 
  
  // let user=JSON.parse(localStorage.getItem("user"))
    // let candidateSkills: CandidateSkill[]=[{candidateId:user.data.id,skillId:this.candidateSkillForm.value.skillId}]
    // console.log(candidateSkills)
    // if (this.candidateSkillForm.valid) {
    //   candidateSkills.forEach(element => {
    //     this.candidateSkillService.add(element).subscribe(
    //       (response: any) => {
    //         console.log(this.candidateSkillForm.value);
    //         this.toastrService.success(response.message, 'Skill eklendi');
    //       },
    //       (responseError) => {
    //         this.toastrService.error(
    //           JSON.stringify(responseError.error.data.errors),
    //           'Doğrulama hatası'
    //         );
    //       }
    //     );
        
    //   });
     
    // } else {
    //   this.toastrService.error('form eksik');
    // }
 
 //  getCandidateSkills() {
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
  //     this.candidate = response.data;
  //     this.candidateSkills=response.data.candidateSkills
  //      });
   
  // }

}
