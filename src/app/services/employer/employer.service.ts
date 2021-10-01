import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from 'src/app/models/employer/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

 apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/employers"
  constructor(private httpClient: HttpClient) { }

  add(employer: Employer){
    return this.httpClient.post(this.apiUrl+"/add",employer);
  }

  getEmployer():Observable<Employer>{
    return this.httpClient.get<Employer>(this.apiUrl+"/get/all");
  }

  // getEmployerValue(employer:Employer){
  //   return this.httpClient.get(this.apiUrl + "/get/byEmailAndPW?email=" + employer.email + "&password=");
  // }

  updateCompanyName(employer:Employer, userId:number): Observable<Employer> {
    return this.httpClient.put<Employer>(this.apiUrl +"/update/companyName?companyName=" + employer.companyName+"&emplId="+userId,{employer,userId}
    );
  }

  updatePhoneNumber(employer:Employer, userId:number): Observable<Employer> {
    return this.httpClient.put<Employer>(this.apiUrl +"/update/phoneNumber?emplId=" + userId+"&phoneNumber="+employer.phoneNumber,{employer,userId}
    );
  }

  updateEmailAndWebsite(email:string,website:string, userId:number): Observable<Employer> {
    return this.httpClient.put<Employer>(this.apiUrl +"/update/emailAndWebsite?email=" + email+ "&emplId=" + userId+"&website="+website,{email,website,userId}
    );
  }

  ApplyChanges(employer:Employer): Observable<Employer> {
    return this.httpClient.put<Employer>(this.apiUrl +'/update/applyChanges?emplId=' +employer.id, employer.id);
  }

  getEmployerById(id: number): Observable<any> {
    return this.httpClient.get<any>(
      this.apiUrl + '/get/byId?emplId=' + id
    );
  }
  
}
