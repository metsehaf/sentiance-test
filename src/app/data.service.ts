import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
// import { IAnalytics } from './analytics.model';

const BACKEND_URL = environment.apiUrl + '/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  getMomentData() {
    return this.http.get<{message: string; moment_history: any}>(
        BACKEND_URL
      );
    }

  getEventData() {
    return this.http.get<{message: string; event_history: any}>(
        BACKEND_URL
      );
    }
  }
