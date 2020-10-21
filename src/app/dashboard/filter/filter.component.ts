import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LAUNCH, LANDING, YEARS } from '../../utils/constants';
import { Filters } from '../models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filters: Filters;
  @Output() applyFilters = new EventEmitter();

  years: Array<number>;
  launchValues: Array<string>;
  landingValues: Array<string>;

  constructor() { }

  ngOnInit() {
    this.launchValues = this.format(LAUNCH,"launch_success", true)
    this.landingValues = this.format(LANDING,"land_success", true)
    this.years = this.format(YEARS,"launch_year")
  }


  format(list,property, isBool = false) {
    console.log("running format again",list,property,this.filters)
    return list.map(val => {
      return {
        value: isBool ? (val === 'Yes' ? "true" : "false") : val,
        display: val
      }
    })
  }



  applyFilter(field: string, selectedProperty: any, propertyName: string) {
    if (this.filters[propertyName] === selectedProperty.value) {
      delete this.filters[propertyName]
    }
    else {
      this.filters[propertyName] = selectedProperty.value
    }
    this.applyFilters.emit({ ...this.filters });
  }
}
