import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe(data => {
        this.event = data;
      });
    } else {
      console.error('Event ID is null');
      // Handle the null case, e.g., navigate away or show an error message
    }    
  }

  bookEvent() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.router.navigate(['/event', eventId, 'book']);  // Navigate to the booking page with event ID
    } else {
      console.error('Event ID is null');
      // Handle the null case, e.g., navigate away or show an error message
    }
  }
}
