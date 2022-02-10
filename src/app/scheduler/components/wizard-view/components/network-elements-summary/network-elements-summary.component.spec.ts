import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkElementsSummaryComponent } from './network-elements-summary.component';

describe('NetworkElementsSummaryComponent', () => {
  let component: NetworkElementsSummaryComponent;
  let fixture: ComponentFixture<NetworkElementsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkElementsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkElementsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
