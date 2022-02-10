import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFinishedDialogComponent } from './schedule-finished-dialog.component';

describe('ScheduleErrorDialogComponent', () => {
  let component: ScheduleFinishedDialogComponent;
  let fixture: ComponentFixture<ScheduleFinishedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleFinishedDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFinishedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
