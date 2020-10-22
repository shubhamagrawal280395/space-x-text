import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { LazyImgDirective } from './directives/image-lazyload.directive';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LoaderService } from './service/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [FilterComponent, LaunchListComponent, HomeComponent,LazyImgDirective,LoaderComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
]
})
export class DashboardModule {}
