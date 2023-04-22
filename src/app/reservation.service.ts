import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation.model';
import { HttpHeaders } from '@angular/common/http';
import { ReservationFetched } from './models/reservation-fetched';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/reservations';

  // Add the following lines to create HttpHeaders with the Basic authentication credentials
  private username = 'admin'; // or 'admin', depending on the role you want to use
  private password = 'admin'; // or 'admin', depending on the role you want to use
  private basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.basicAuth });

  constructor(private http: HttpClient) { }

  // Add this.headers to all the HTTP requests
  createReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, reservation, { headers: this.headers });
  }

  getAllReservations(): Observable<ReservationFetched[]> {
    return this.http.get<ReservationFetched[]>(`${this.baseUrl}/getall`, { headers: this.headers });
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/get/${id}`, { headers: this.headers });
  }

  updateReservation(id: number, reservation: Partial<Reservation>): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/update/${id}`, reservation, { headers: this.headers });
  }

}
