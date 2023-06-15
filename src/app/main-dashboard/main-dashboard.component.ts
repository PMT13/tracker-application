import { Component } from '@angular/core';
import { ITracker } from '../interfaces/ITracker';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  trackerList: ITracker[] = [{id: "1",title: "Tracker 1"},{id: "2",title: "Tracker 2"},{id: "3",title: "Tracker 3"}];

}
