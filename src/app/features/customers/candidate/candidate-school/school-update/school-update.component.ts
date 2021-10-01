import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-school/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})

export class SchoolUpdateComponent implements OnInit {

  schools: School[] = [];
  departments: Department[] = []
  candidateSchoolUpdateForm: FormGroup;
  candidateSchools: CandidateSchool[] = []
  school: School[] = []
  schoolNames: string[] = []
  user: any;
  schoolIds: number[]=[]
  candidateSchoolId: number[]=[]
  candidate: Candidate;
  selectedLevel: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private candidateSchoolService: CandidateSchoolService,
    private router: Router,
    private toastrService: ToastrService,
    private schoolService: SchoolService,
    private candidateService: CandidateService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.createSchoolUpdateForm();
    this.getSchools();
    this.getDepartments();
    this.getUserId();
    this.getCandidateSchools();
  }

  getCandidatesById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data: any) => {
      this.candidate = data.data;
      console.log(data.data)
    })
  }

  createSchoolUpdateForm() {
    this.candidateSchoolUpdateForm = this.formBuilder.group({
      schoolId: ['', Validators.required],
    });
  }

  getSchools() {
    this.schoolService.getSchool().subscribe((data: any) => {
      
      this.schools = data.data;
    });
  }

  getCandidateSchools() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidateSchools = response.data.candidateSchools
      this.school = response.data.candidateSchools.map(o => o.school)
      // this.department= response.data.candidateSchools.map(o=>o.department)
      this.schoolNames = this.school.map(o => o.name)
      //  this.departmentNames=this.department.map(o=>o.name)
      this.candidateSchoolId = response.data.candidateSchools.map(o=>o.id)
     this.schoolIds=this.school.map(o => o.id)
      

    });
  }

  getDepartments() {
    this.departmentService.getDepartment().subscribe((data: any) => {
      this.departments = data.data;
    });
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  updateSchoool() {
     
      if (this.candidateSchoolUpdateForm.valid) {
      localStorage.getItem("user")
      this.candidateSchoolService.updateSchool(this.candidateSchoolUpdateForm.value.schoolId,this.candidateSchoolId[0]).subscribe(
         (response: any) => {
           
          this.toastrService.success(response.message, 'Okul bilgileri güncellendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası');});
    } else {
      this.toastrService.error('Bilgileri eksik girdiniz.');
    }

  }

  selected(){
    
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      
     
     
     
      
       if(this.selectedLevel==response.data.candidateSchools.map(o => o.school).map(o=>o.id)){
         
         console.log(this.selectedLevel)
 
      

     }

    });
    
    
   

    // console.log(this.selectedLevel)
  }

  
}
