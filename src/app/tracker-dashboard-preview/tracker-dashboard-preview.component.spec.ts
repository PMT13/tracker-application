import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDashboardPreviewComponent } from './tracker-dashboard-preview.component';

describe('TrackerDashboardPreviewComponent', () => {
  let component: TrackerDashboardPreviewComponent;
  let fixture: ComponentFixture<TrackerDashboardPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackerDashboardPreviewComponent]
    });
    fixture = TestBed.createComponent(TrackerDashboardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
