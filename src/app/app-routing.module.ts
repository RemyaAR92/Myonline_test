import { MainPageComponent } from './components/main-page/main-page.component';
import { LocationFetchComponent } from './components/location-fetch/location-fetch.component';
import { GraphViewComponent } from './components/graph-view/graph-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  
  { path: '', component:DashboardComponent, 
    children: [
      { path: '', component: MainPageComponent },
      { path: 'location-fetch', component: LocationFetchComponent },
      { path: 'graph-view', component: GraphViewComponent },
    ]
}  
, { path: "", pathMatch: "full", redirectTo: "/" }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
