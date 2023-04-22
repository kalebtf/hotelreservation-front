import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {
  reservation: Reservation = new Reservation();
  id!: number;

  constructor(public router: Router, private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.fetchReservation();
  }

  fetchReservation(): void {
    this.reservationService.getReservationById(this.id).subscribe(
      (data: Reservation) => {
        this.reservation = data;
        this.reservation.startDateString = new Date(data.reservationDates[0]).toISOString().split('T')[0];
        this.reservation.endDateString = new Date(data.reservationDates[1]).toISOString().split('T')[0];
      }
    );
  }

  onSubmit(): void {
    const reservationWithDates = {
      clientFullName: this.reservation.clientFullName,
      roomNumber: this.reservation.roomNumber,
      reservationDates: [
        this.reservation.startDateString,
        this.reservation.endDateString,
      ],
    };

    this.reservationService.updateReservation(this.id, reservationWithDates).subscribe(
      () => this.router.navigate(['/reservations'])
    );
  }
}
