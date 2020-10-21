import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { LaunchDetails } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;


  getLaunches(filters) {
    let url = `${this.baseUrl}/launches?limit=10`;

    url = `${url}${Object.keys(filters).reduce((a,filter)=> `${a}&${filter}=${filters[filter]}` ,"")}`

    return this.http.get<LaunchDetails[]>(url);

  }
}
