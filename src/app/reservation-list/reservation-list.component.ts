import { Component, OnInit } from '@angular/core';
import { ReservationFetched } from '../models/reservation-fetched';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: ReservationFetched[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    this.reservationService.getAllReservations().subscribe(
      (data: ReservationFetched[]) => this.reservations = data
    );
  }
}
