import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationFetchComponent } from './components/location-fetch/location-fetch.component';
import { GraphViewComponent } from './components/graph-view/graph-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/module/shared.module';
import { DemoMaterialModule } from './shared/module/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppFacade } from './facade/app.facade';
import { AppApiService } from './components/services/app.service';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LocationFetchComponent,
    GraphViewComponent,
    DashboardComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    DemoMaterialModule.forRoot(),
    NgApexchartsModule
  ],
  providers: [
    AppFacade,
    AppApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
