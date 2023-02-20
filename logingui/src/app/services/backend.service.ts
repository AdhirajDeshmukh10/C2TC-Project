import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url:String="http://localhost:8082"
  constructor(private http:HttpClient) {}

  addCustomer(data:any){
    return this.http.post(`${this.url}/customer`,data)
  }
}
