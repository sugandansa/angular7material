import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('../assets/new.json');
  }
}