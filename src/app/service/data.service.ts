import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'assets/json/blogs-data.json';
  constructor(private http: HttpClient) {}
  data: any;
  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
