import { Injectable } from '@angular/core';
import { Check } from '../models/check';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) { }

  private FAKE_API = `http://localhost:3000/check`;

  postCheck(check: Check): Observable<Check> {
    return this.http.post<Check>(this.FAKE_API, check, { headers: { 'Content-Type': 'application/json' } });
  }

  postImage(file: File): Observable<Check> {
    return this.http.post<Check>(this.FAKE_API, file);
  }

  getCheck(): Observable<Check> {
    return this.http.get<Check>(this.FAKE_API);
  }

}
