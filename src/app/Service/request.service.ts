import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Request } from "../Model/request";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url : string = "http://localhost:3000/request"

  constructor(private httpclient : HttpClient) { }
  getAll(){
    return this.httpclient.get<Request[]>(this.url);
  }
  public addRequest(request : Request): Observable<Object>{
    return this.httpclient.post(`${this.url}`, request);
  }
}
