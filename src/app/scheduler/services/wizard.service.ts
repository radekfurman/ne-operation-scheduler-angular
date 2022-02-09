import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NetworkElement } from '../mocks/networkElementsData';
import { WizardStepType } from '../model/stepsConfig';
import { OperationType, Status, WizardStore } from '../model/wizardStore';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  private wizardData: WizardStore = {
    wizardStep: WizardStepType.NetworkElement,
    selectedNetworkElements: [],
    selectedOperation: undefined,
    status: Status.init
  };
  private _wizardStep = new BehaviorSubject<WizardStepType>(WizardStepType.NetworkElement);
  private _selectedNetworkElements = new BehaviorSubject<NetworkElement[]>([])
  private _selectedOperation = new BehaviorSubject<OperationType | undefined>(undefined)

  private _dataStore = new BehaviorSubject<WizardStore>(this.wizardData)

  constructor(private notificationsService: NotificationsService) { }


  get dataStore() {
    return this._dataStore.asObservable();
  }

  get wizardStep() {
    return this._wizardStep.asObservable();
  }

  setNextStep() {
    ++this.wizardData.wizardStep
    this._wizardStep.next(this.wizardData.wizardStep);
    this._dataStore.next(this.wizardData);
  }

  setPreviousStep() {
    --this.wizardData.wizardStep
    this._wizardStep.next(this.wizardData.wizardStep);
    this._dataStore.next(this.wizardData);
  }

  setStep(step: WizardStepType) {
    this.wizardData.wizardStep = step
    this._wizardStep.next(this.wizardData.wizardStep);
    this._dataStore.next(this.wizardData);
  }

  get networkElements() {
    return this._selectedNetworkElements.asObservable();
  }
  setNetworkElements(nes: NetworkElement[]) {
    this.wizardData.selectedNetworkElements = nes;
    this._selectedNetworkElements.next(this.wizardData.selectedNetworkElements);
    this._dataStore.next(this.wizardData);
  }

  get selectedOperation() {
    return this._selectedOperation.asObservable();
  }

  setSelectedOperation(operation: OperationType) {
    this.wizardData.selectedOperation = operation;
    this._selectedOperation.next(this.wizardData.selectedOperation);
    this._dataStore.next(this.wizardData);
  }

  restore() {
    this.wizardData = {
      wizardStep: WizardStepType.NetworkElement,
      selectedNetworkElements: [],
      selectedOperation: undefined,
      status: Status.init
    }
    this._wizardStep.next(this.wizardData.wizardStep);
    this._selectedNetworkElements.next(this.wizardData.selectedNetworkElements);
    this._dataStore.next(this.wizardData);
    this.notificationsService.notifyWizardReset()
  }

  schedule() {

  }
}
