import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../services/wizard.service';
import { stepsConfig } from '../../model/stepsConfig';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'wizard-navigation',
  templateUrl: './wizard-navigation.component.html',
  styleUrls: ['./wizard-navigation.component.scss']
})
export class WizardNavigationComponent implements OnInit {
  currentStep = 0;
  stepsDefinitions = stepsConfig;
  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {

  }

  nextStep = () => {
    this.wizardService.setNextStep();
  }

  previousStep = () => {
    this.wizardService.setPreviousStep();
  }

  stepClick = (ev: StepperSelectionEvent) => {
    this.wizardService.setStep(ev.selectedIndex);
  }

}
