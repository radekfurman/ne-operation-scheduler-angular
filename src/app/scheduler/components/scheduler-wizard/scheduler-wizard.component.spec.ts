import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerWizardComponent } from './scheduler-wizard.component';

describe('SchedulerWizardComponent', () => {
  let component: SchedulerWizardComponent;
  let fixture: ComponentFixture<SchedulerWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulerWizardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
