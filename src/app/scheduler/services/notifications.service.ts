import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _resetWizardState = new Subject<string>();

  constructor() { }

  get notificationWizardReset() {
    return this._resetWizardState.asObservable();
  }
  notifyWizardReset() {
    this._resetWizardState.next('wizard state reset')
  }
}
