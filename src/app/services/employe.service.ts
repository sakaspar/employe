import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {employe} from '../entities/employe';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {
   

  constructor(private http: HttpClient) { }



  public addEmp(ss: any): Observable<any> {
    return this.http.post<employe>("http://localhost:8883/employee/save", ss);
  
  }



}
