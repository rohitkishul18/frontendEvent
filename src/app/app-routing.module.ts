import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventBookingComponent } from './event-booking/event-booking.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'event/:id', component: EventDetailsComponent } ,
  { path: 'event/:id/book', component: EventBookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
