import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { navigationConfiguration } from '../../model/navigationPreconditions';
import { WizardStepType } from '../../model/stepsConfig';
import { NetworkElement, OperationType, ScheduleState, Status, WizardStore } from '../../model/wizardStore';
import { NotificationsService } from '../../services/notifications.service';
import { WizardService } from '../../services/wizard.service';
import { ScheduleFinishedDialogComponent } from './components/schedule-error-dialog/schedule-finished-dialog.component';

@Component({
  selector: 'wizard-view',
  templateUrl: './wizard-view.component.html',
  styleUrls: ['./wizard-view.component.scss']
})
export class WizardViewComponent implements OnInit, OnDestroy {
  public wizardStepType = WizardStepType;
  isPosting = false;
  error: string | null = null;
  private errSub!: Subscription

  constructor(public wizardService: WizardService, private notificationService: NotificationsService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.errSub = this.notificationService.notificationScheduleFinished.subscribe((scheduleState: ScheduleState) => {
      this.openDialog(scheduleState)

    })
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
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

  schedule = (networkElements: NetworkElement[], operation: OperationType | undefined) => {
    this.isPosting = true;
    this.wizardService.schedule({ networkElements, operation }).subscribe((res) => {
      console.log(res);
      this.isPosting = false;
      this.notificationService.notifyScheduleFinished({ networkElements: networkElements, error: undefined, status: Status.success });

    }, error => {
      console.log(error.message)
      this.isPosting = false;
      this.notificationService.notifyScheduleFinished({ networkElements: networkElements, error: error.message, status: Status.fail });
    });

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

  openDialog(scheduleState: ScheduleState) {
    const dialogRef = this.dialog.open(ScheduleFinishedDialogComponent, { data: scheduleState });
  }
}
