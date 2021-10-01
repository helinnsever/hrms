import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemEmployee } from 'src/app/models/system-employee/system-employee';
import { SystemEmployeeResponse } from 'src/app/models/system-employee/system-employeeResponse';

@Injectable({
  providedIn: 'root'
})
export class SystemEmployeeService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees"
  constructor(private httpClient: HttpClient) { }

  getSystemEmployeeById(id: number): Observable<SystemEmployeeResponse> {
    return this.httpClient.get<SystemEmployeeResponse>(
      this.apiUrl + '/get/byId?sysEmplId=' + id
    );
  }

  updateFirstName(systemEmployee: SystemEmployee, userId:number): Observable<SystemEmployee> {
    return this.httpClient.put<SystemEmployee>(this.apiUrl +"/update/firstName?firstName=" + systemEmployee.firstName + "&sysEmplId=" + userId, {systemEmployee,userId}
    );
  }

  updateLastName(systemEmployee: SystemEmployee, userId:number): Observable<SystemEmployee> {
    return this.httpClient.put<SystemEmployee>(this.apiUrl +"/update/lastName?lastName=" + systemEmployee.lastName + "&sysEmplId=" + userId, {systemEmployee,userId}
    );
  }

  

 
}
