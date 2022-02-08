import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardService } from '../../services/wizard.service';
import { stepsConfig } from '../../model/stepsConfig';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { NotificationsService } from '../../services/notifications.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'wizard-navigation',
  templateUrl: './wizard-navigation.component.html',
  styleUrls: ['./wizard-navigation.component.scss']
})
export class WizardNavigationComponent implements OnInit {
  currentStep = 0;
  stepsDefinitions = stepsConfig;
  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('stepper', { static: false }) private myStepper!: MatStepper;

  constructor(public wizardService: WizardService, private notificationsService: NotificationsService) { }


  ngOnInit(): void {
    this.notificationsService.notificationWizardReset.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.myStepper.reset();
    })
  }

  stepClick = (ev: StepperSelectionEvent) => {
    this.wizardService.setStep(ev.selectedIndex);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
