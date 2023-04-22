import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {
  reservation: Reservation = new Reservation();

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const reservationWithDates = {
      ...this.reservation,
      reservationDates: [this.reservation.startDateString, this.reservation.endDateString],
    };

    this.reservationService.createReservation(reservationWithDates).subscribe(
      () => this.router.navigate(['/reservations'])
    );
  }
}
