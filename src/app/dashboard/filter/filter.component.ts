import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LAUNCH, LANDING, YEARS ,LIMITS} from '../../utils/constants';
import { Filters } from '../models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filters: Filters={};
  @Output() applyFilters = new EventEmitter();

  years: Array<any>=[];
  launchValues: Array<any>=[];
  landingValues: Array<any>=[];
  limits:Array<any>=[];

  constructor() { }

  ngOnInit() {
    this.launchValues = this.format(LAUNCH)
    this.landingValues = this.format(LANDING)
    this.years = this.format(YEARS)
    this.limits = this.format(LIMITS)
  }


  format(list) {
    return list.map(val => {
      return {
        value: `${val}`.toLowerCase(),
        display: val
      }
    })
  }



  applyFilter(field: string, selectedProperty: any, propertyName: string) {
    if (`${this.filters[propertyName]}` == `${selectedProperty.value}` && propertyName!=="limit") {
      delete this.filters[propertyName]
    }
    else {
      this.filters[propertyName] = selectedProperty.value
    }
    this.applyFilters.emit({ ...this.filters });
  }
}
