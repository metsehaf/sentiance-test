import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  moment_history: any[] = [];
  event_history: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMomentData()
    .subscribe(momentData => {
      this.moment_history = momentData.moment_history;
  });
  this.data.getEventData()
  .subscribe(eventData => {
    this.event_history = eventData.event_history;
  });
  }
}
