import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss']
})
export class EventBookingComponent {
  user = { name: '', email: '' }; // User model
  eventId: string = ''; // Store generated event ID
  bookingSuccess: boolean = false; // Track booking success

  constructor(private userService:UserService,private route:Router,private Activate:ActivatedRoute) {}

  // Function to generate a random event ID (for demo purposes)
  // generateEventId(): string {
  //   return Math.random().toString(36).substr(2, 9); // Generate random eventId
  // }

  // Submit function to handle booking
  // onSubmit(): void {
  //   this.eventId = this.generateEventId(); // Generate a new event ID when booking
  //   const userId = this.user.email; // Use email as the user ID

  //   // Call the booking service
  //   this.eventService.bookEvent(this.eventId, userId).subscribe(
  //     (response: any) => {
  //       console.log('Booking successful:', response);
  //       this.bookingSuccess = true; // Display success message
  //     },
  //     (error: any) => {
  //       console.error('Booking failed:', error);
  //       this.bookingSuccess = false;
  //     }
  //   );
  // }
  onSubmit(){
      this.userService.createUser(this.user).subscribe(res=>{
        alert('user booking sucessfully....');
        this.route.navigate(['/']);
      })
  }
}
