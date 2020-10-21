import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LaunchDetails, Filters } from '../models/models';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filters: Filters ;
  launchList: LaunchDetails[] = [];


  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.filters = params.keys.reduce((filters, k) => (filters[k] = params.get(k),filters), {})
      this.getLaunches();
    });
  }

  applyFilters(payload) {
    this.filters = payload;
    this.navigate();
  }





  navigate() {
    this.router.navigate(['/filter'], {
      queryParams: this.filters,
    });
  }


  getLaunches() {
    this.dashboardService
      .getLaunches(this.filters)
      .subscribe((data: LaunchDetails[]) => (this.launchList = data));
  }
}
