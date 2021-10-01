import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-skill/candidate-skill.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-candidate-skill-from',
  templateUrl: './candidate-skill-from.component.html',
  styleUrls: ['./candidate-skill-from.component.css']
})
export class CandidateSkillFromComponent implements OnInit {

  skills: Skill[] = [];
  candidateSkillForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private candidateSkillService: CandidateSkillService,
    private router: Router,
    private toastrService: ToastrService,
    private skillService: SkillService
    
  ) {}

  ngOnInit(): void {
    this.createSkillAddForm();
    this.getSkills();
  
  }

  createSkillAddForm() {
    this.candidateSkillForm=this.formBuilder.group({
      skillId: ["",Validators.required],
  })
}

  candidateSkillAdd() {
    let user=JSON.parse(localStorage.getItem("user"))
    let candidateSkills: CandidateSkill[]=[{candidateId:user.data.id,skillId:this.candidateSkillForm.value.skillId}]
    console.log(candidateSkills)
    if (this.candidateSkillForm.valid) {
      candidateSkills.forEach(element => {
        this.candidateSkillService.add(element).subscribe(
          (response: any) => {
            console.log(this.candidateSkillForm.value);
            this.toastrService.success(response.message, 'Skill eklendi');
          },
          (responseError) => {
            this.toastrService.error(
              JSON.stringify(responseError.error.data.errors),
              'Doğrulama hatası'
            );
          }
        );
        
      });
     
    } else {
      this.toastrService.error('form eksik');
    }
  }

 



  getSkills() {
    this.skillService.getSkill().subscribe((data: any) => {
      this.skills = data.data;
    });
  }
  

}
