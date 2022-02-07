import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardViewComponent } from './wizard-view.component';

describe('WizardViewComponent', () => {
  let component: WizardViewComponent;
  let fixture: ComponentFixture<WizardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
