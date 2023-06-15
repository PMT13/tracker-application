import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TrackerDashboardPreviewComponent } from './tracker-dashboard-preview/tracker-dashboard-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    MainDashboardComponent,
    TrackerDashboardPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
