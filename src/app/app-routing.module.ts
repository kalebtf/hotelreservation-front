import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservations/:id', component: ReservationDetailsComponent },
  { path: 'create', component: ReservationCreateComponent },
  { path: 'update/:id', component: ReservationUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
