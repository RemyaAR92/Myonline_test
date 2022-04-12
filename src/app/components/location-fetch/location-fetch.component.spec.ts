import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFetchComponent } from './location-fetch.component';

describe('LocationFetchComponent', () => {
  let component: LocationFetchComponent;
  let fixture: ComponentFixture<LocationFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
