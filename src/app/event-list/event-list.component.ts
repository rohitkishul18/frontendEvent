import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService){
  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data:any) => {
      this.events = data;
      console.log("event id",this.events)
    });
  }
}


