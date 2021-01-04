import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {bag} from '../entities/bag';



@Injectable({
  providedIn: 'root'
})
export class BagService {
   

  constructor(private http: HttpClient) { }



  public addEmp(ss: any): Observable<any> {
    return this.http.post<bag>("http://localhost:8883/Bag/save", ss);
  
  }



}
