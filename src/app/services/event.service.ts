import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8000/api/events';  // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getEventById(eventId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${eventId}`);
  }

  bookEvent(eventId: string, userId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${eventId}/book`, { user_id: userId });
  }
}
