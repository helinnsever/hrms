import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementResponse } from 'src/app/models/job-advertisement/job-advertisementResponse';


@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements"
  constructor(private httpClient: HttpClient) { }

  add(JobAdvertisement: JobAdvertisement){
    return this.httpClient.post(this.apiUrl+"/add",JobAdvertisement);
  }

  getJobAdvertisement():Observable<JobAdvertisement>{
    return this.httpClient.get<JobAdvertisement>(this.apiUrl+"/get/all");
  }

  getActiveJobAdvertisements():Observable<JobAdvertisement>{
    return this.httpClient.get<JobAdvertisement>(this.apiUrl+"/get/active");

  }

  getActiveJobAdvertisementsByDate(sortDirection:number):Observable<JobAdvertisementResponse>{
    return this.httpClient.get<JobAdvertisementResponse>(this.apiUrl+"/get/activeVerifiedByCreatedAt?sortDirection="+sortDirection);

  }

  getActiveJobAdvertisementsByCompany(employerId:number):Observable<JobAdvertisementResponse>{
    return this.httpClient.get<JobAdvertisementResponse>(this.apiUrl+"/get/byEmployer?employerId="+employerId);

  }
  
  closeJobAdvertisement(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(this.apiUrl +'/update/activation?jobAdvId=' +jobAdvertisement.id +'&status=' +!jobAdvertisement.active,jobAdvertisement);
  }

  getUnverifiedJobList(sortDirection:number):Observable<JobAdvertisementResponse>{
    return this.httpClient.get<JobAdvertisementResponse>(this.apiUrl+"/get/unverified?sortDirection="+sortDirection);

  }

  changeVerificationOfJob(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(this.apiUrl +'/update/verification?jobAdvId=' +jobAdvertisement.id +'&status=' +!jobAdvertisement.verified,jobAdvertisement);
  }

  makeUnverified(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(this.apiUrl +'/update/verification?jobAdvId=' +jobAdvertisement.id +'&status=' +!jobAdvertisement.verified,jobAdvertisement);
  }

  
  
}
