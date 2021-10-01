import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';

@Injectable({
  providedIn: 'root'
})
export class CandidateLanguageService {

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages"
  constructor(private httpClient: HttpClient) { }

  add(candidateLanguage: CandidateLanguage) {
    return this.httpClient.post(this.apiUrl + "/add", candidateLanguage);
  }

  getCandidateLanguages(): Observable<CandidateLanguage> {
    return this.httpClient.get<CandidateLanguage>(this.apiUrl + "/get/all");
  }

  deleteById(langId: number): Observable<CandidateLanguage> {
    return this.httpClient.delete<CandidateLanguage>(this.apiUrl + '/delete/byId?CandLangId=' + langId
    );
  }

  updateLanguageLevel(candidateLanguage: CandidateLanguage, languageLevel: string, candLangId: number): Observable<CandidateLanguage> {
    return this.httpClient.put<CandidateLanguage>(this.apiUrl + "/update/langLevel?" + candLangId + '&languageLevel=' + languageLevel, candidateLanguage
    );
  }

  updateLanguage(candidateLanguage: CandidateLanguage, languageId: string, candLangId: number): Observable<CandidateLanguage> {
    return this.httpClient.put<CandidateLanguage>(this.apiUrl + "/language?" + candLangId + '&languageId=' + languageId, candidateLanguage
    );
  }

  removeFromLanguages(id: number){
    return this.httpClient.delete(this.apiUrl + "/delete/byId?CandLangId=" + id);
  }

}
