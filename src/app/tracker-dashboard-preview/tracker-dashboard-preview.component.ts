import { Component, Input } from '@angular/core';
import { ITracker } from '../interfaces/ITracker';

@Component({
  selector: 'app-tracker-dashboard-preview',
  templateUrl: './tracker-dashboard-preview.component.html',
  styleUrls: ['./tracker-dashboard-preview.component.css']
})
export class TrackerDashboardPreviewComponent {
  @Input() tracker!: ITracker;
}
