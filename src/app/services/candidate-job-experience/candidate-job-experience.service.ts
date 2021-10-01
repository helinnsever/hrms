import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';

@Injectable({
  providedIn: 'root'
})
export class CandidateJobExperienceService {
  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences"
  constructor(private httpClient: HttpClient) { }

  getCandidateJobExperience(): Observable<CandidateJobExperience> {
    return this.httpClient.get<CandidateJobExperience>(this.apiUrl + "/get/all");
  }

  add(candidateJobExperience: CandidateJobExperience) {
    return this.httpClient.post(this.apiUrl + "/add", candidateJobExperience);
  }

  get(): Observable<CandidateJobExperience> {
    return this.httpClient.get<CandidateJobExperience>(this.apiUrl + "/get/all");
  }

  deleteById(jobExpId: number): Observable<CandidateJobExperience> {
    return this.httpClient.delete<CandidateJobExperience>(
      this.apiUrl + '/delete/byId?candJobExpId=' + jobExpId
    );
  }

  updateWorkPlace(candidateJobExperience: CandidateJobExperience, workPlace: string, candJobId: number): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(this.apiUrl + '/update/workPlace?candJobExpId=' + candJobId + '&workPlace=' + workPlace, candidateJobExperience
    );
  }

  updatePosition(candidateJobExperience: CandidateJobExperience, positionId: number, candJobId: number): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(this.apiUrl + '/update/position?candJobExpId=' + candJobId + '&positionId=' + positionId, candidateJobExperience
    );
  }

  updateStartYear(candidateJobExperience: CandidateJobExperience, startYear: string, candJobId: number): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(this.apiUrl + '/update/startYear?candJobExpId=' + candJobId + '&startYear=' + startYear, candidateJobExperience
    );
  }

  updateQuitYear(candidateJobExperience: CandidateJobExperience, quitYear: string, candJobId: number): Observable<CandidateJobExperience> {
    return this.httpClient.put<CandidateJobExperience>(this.apiUrl + '/update/quitYear?candJobExpId=' + candJobId + '&quitYear=' + quitYear, candidateJobExperience
    );
  }
  removeFromJobExperiences(id: number){
    return this.httpClient.delete(this.apiUrl + "/delete/byId?candJobExpId=" + id);
  

  }
}
