import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { LazyImgDirective } from './directives/image-lazyload.directive';
import { LaunchListComponent } from './launch-list/launch-list.component';

@NgModule({
  declarations: [FilterComponent, LaunchListComponent, HomeComponent,LazyImgDirective],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
