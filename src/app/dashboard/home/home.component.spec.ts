import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FilterComponent } from '../filter/filter.component';
import { LaunchListComponent } from '../launch-list/launch-list.component';
import { LoaderComponent } from '../loader/loader.component';
import { DashboardService } from '../service/dashboard.service';
import { LoaderService } from '../service/loader.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
    queryParamMap: of({ keys: [] })
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'filter',
          component: HomeComponent,
        },
      ])],
      declarations: [
        HomeComponent,
        FilterComponent,
        LaunchListComponent,
        LoaderComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: fakeActivatedRoute
        },
        DashboardService,
        HttpClient,
        HttpHandler,
        LoaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});