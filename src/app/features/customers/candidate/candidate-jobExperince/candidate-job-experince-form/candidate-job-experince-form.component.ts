import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { Employer } from 'src/app/models/employer/employer';
import { Position } from 'src/app/models/position/position';
import { CandidateJobExperienceService } from 'src/app/services/candidate-job-experience/candidate-job-experience.service';
import { EmployerService } from 'src/app/services/employer/employer.service';
import { PositionService } from 'src/app/services/position/position.service';

@Component({
  selector: 'app-candidate-job-experince-form',
  templateUrl: './candidate-job-experince-form.component.html',
  styleUrls: ['./candidate-job-experince-form.component.css']
})
export class CandidateJobExperinceFormComponent implements OnInit {
  employers: Employer[]=[]
  positions: Position[]=[]
  candidateJobExperienceForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private candidateJobExperienceService: CandidateJobExperienceService,
    private router: Router,
    private toastrService: ToastrService,
    private positionService: PositionService,
    private employerService: EmployerService
    
    
  ) {}

  ngOnInit(): void {
    this.createJobExperienceAddForm();
    this.getPositions();
    this.getEmployers();
    
  
  }

  createJobExperienceAddForm() {
    this.candidateJobExperienceForm=this.formBuilder.group({
      positionId:["",Validators.required],
      quitYear: ["",Validators.required],
      startYear: ["",Validators.required],
      workPlace: ["",Validators.required],
  })
}

  candidateJobExperienceAdd() {
    let user=JSON.parse(localStorage.getItem("user"))
    let candidateJobExperience: CandidateJobExperience={candidateId:user.data.id,positionId:this.candidateJobExperienceForm.value.positionId,quitYear:this.candidateJobExperienceForm.value.quitYear,
    startYear: this.candidateJobExperienceForm.value.startYear, workPlace: this.candidateJobExperienceForm.value.workPlace}
    if (this.candidateJobExperienceForm.valid) {
      this.candidateJobExperienceService.add(candidateJobExperience).subscribe(
        (response: any) => {
          console.log(this.candidateJobExperienceForm.value);
          this.toastrService.success(response.message, 'Deneyim eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('iki kere aynı pozisyon eklenemez');
    }
  }

  getPositions() {
    this.positionService.getPositions().subscribe((data: any) => {
      this.positions= data.data;
    });
  }

  getEmployers() {
    this.employerService.getEmployer().subscribe((data: any) => {
      this.employers= data.data;
    });
  }

  

}
