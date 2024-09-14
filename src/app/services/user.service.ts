import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: { name: string; email: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }
}
