import { Injectable } from '@angular/core';
import { Check } from '../models/check';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) { }

  private FAKE_API = `http://da108f82.ngrok.io/api/v1/check/`;

  postImage(file): Observable<any> {
    var form = new FormData();
    form.append('image', file.image, file.image.name);
    return this.http.post<any>(`${this.FAKE_API}`, form);
  }

  getCheck(id:number): Observable<any> {
    return this.http.get<Check>(`${this.FAKE_API}${id}`);
  }

}
