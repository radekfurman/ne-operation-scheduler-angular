import { Component, OnInit } from '@angular/core';
import { navigationConfiguration } from '../../model/navigationPreconditions';
import { WizardStepType } from '../../model/stepsConfig';
import { WizardStore } from '../../model/wizardStore';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'wizard-view',
  templateUrl: './wizard-view.component.html',
  styleUrls: ['./wizard-view.component.scss']
})
export class WizardViewComponent implements OnInit {
  public wizardStepType = WizardStepType;

  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {
  }

  nextStep = () => {
    this.wizardService.setNextStep();
  }

  previousStep = () => {
    this.wizardService.setPreviousStep();
  }

  cancel = () => {
    this.wizardService.restore();
  }

  schedule = () => {
    this.wizardService.schedule();
  }

  isCancelButtonDisabled = (state: WizardStore): boolean => {
    return !navigationConfiguration[state.wizardStep].canCancel(state);
  };

  isNextButtonDisabled = (state: WizardStore): boolean => {
    return !navigationConfiguration[state.wizardStep].canGoNext(state);
  };

  isBackButtonDisabled = (state: WizardStore): boolean => {
    return !navigationConfiguration[state.wizardStep].canGoBack(state);
  };

  isScheduleButtonVisible = (state: WizardStore): boolean => {
    return state.wizardStep === WizardStepType.Summary;
  };

  isScheduleButtonDisabled = (state: WizardStore): boolean => {
    return !navigationConfiguration[state.wizardStep].canSchedule(state);
  };
}
