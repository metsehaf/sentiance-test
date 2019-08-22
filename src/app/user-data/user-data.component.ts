import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userData: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUserData()
    .subscribe(userData => {
      this.userData = userData.userData;
  });
  }
}
