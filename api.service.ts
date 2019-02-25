import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:8000';
  constructor(private  httpClient:  HttpClient) { }
  getContacts(){
    return  this.httpClient.get(`${this.API_URL}/contacts`);
}
}
