import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private FAKE_API = `http://localhost:3000/users/`;

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.FAKE_API}${id}`);
  }
  
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.FAKE_API}`)
  }
}
