import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userData: any[] = [];
  isLoading = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUserData()
    .subscribe(userData => {
      this.isLoading = false;
      this.userData = userData.userData;
  });
  }
}
