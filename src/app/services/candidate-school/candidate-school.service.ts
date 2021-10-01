import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"
  constructor(private httpClient: HttpClient) { }

  add(candidateSchool: CandidateSchool){
    return this.httpClient.post(this.apiUrl+"/add",candidateSchool);
  }



  updateDepartment(candidateSchool: CandidateSchool, departmentId: number, candSchId: number): Observable<CandidateSchool> {
    return this.httpClient.put<CandidateSchool>(this.apiUrl +"/update/department?candSchId=" + candSchId + "&departmentId=" + departmentId, candidateSchool
    );
  }

  updateGradYear(candidateSchool: CandidateSchool, gradYear: number, candSchId: number): Observable<CandidateSchool> {
    return this.httpClient.put<CandidateSchool>(this.apiUrl +"/update/gradYear?candSchId=" + candSchId + '&graduationYear=' + gradYear, candidateSchool
    );
  }

  updateSchool( candSchId: number,schoolId: number): Observable<CandidateSchool> {
    return this.httpClient.put<CandidateSchool>(this.apiUrl +"/update/school?candSchId=" + schoolId + "&schoolId=" + candSchId, {candSchId,schoolId}
    );
  }

  updateStartYear(candidateSchool: CandidateSchool, startYear: number, candSchId: number): Observable<CandidateSchool> {
    return this.httpClient.put<CandidateSchool>(this.apiUrl +"/update/startYear?candSchId=" + candSchId + "&startYear=" + startYear, candidateSchool
    );
  }

  removeFromSchools(id: number){
    return this.httpClient.delete(this.apiUrl + "/delete/byId?candSchId=" + id);
  }
}
