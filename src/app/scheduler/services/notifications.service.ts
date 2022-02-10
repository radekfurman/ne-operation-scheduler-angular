import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScheduleState } from '../model/wizardStore';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _resetWizardState = new Subject<string>();
  private _scheduleState = new Subject<ScheduleState>();

  constructor() { }

  get notificationWizardReset() {
    return this._resetWizardState.asObservable();
  }
  notifyWizardReset() {
    this._resetWizardState.next('wizard state reset')
  }

  get notificationScheduleFinished() {
    return this._scheduleState.asObservable()
  }

  notifyScheduleFinished(schedule: ScheduleState) {
    this._scheduleState.next(schedule);
  }


}
