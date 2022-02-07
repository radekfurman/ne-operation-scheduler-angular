import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WizardStepType } from '../model/stepsConfig';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private _wizardStep = new BehaviorSubject<WizardStepType>(WizardStepType.NetworkElement);
  private dataStore: { wizardStep: WizardStepType } = { wizardStep: WizardStepType.NetworkElement }

  constructor() { }

  get wizardStep() {
    return this._wizardStep.asObservable();
  }

  setNextStep() {
    ++this.dataStore.wizardStep
    this._wizardStep.next(this.dataStore.wizardStep);
  }

  setPreviousStep() {
    --this.dataStore.wizardStep
    this._wizardStep.next(this.dataStore.wizardStep);
  }

  setStep(step: WizardStepType) {
    this.dataStore.wizardStep = step
    this._wizardStep.next(this.dataStore.wizardStep);
  }
}
