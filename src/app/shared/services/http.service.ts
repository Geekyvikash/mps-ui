import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private base: BaseService) { 

  }


  getDataWithPost(URL:any , data:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
    return this.http.post(URL,data,httpOptions)
  }

  getDataWithGet(URL:any , header?:any){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
    return this.http.get(URL,httpOptions);
  }
}
