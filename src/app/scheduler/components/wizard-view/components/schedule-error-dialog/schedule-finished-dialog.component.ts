import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleState, Status } from 'src/app/scheduler/model/wizardStore';

@Component({
  selector: 'schedule-finished-dialog',
  templateUrl: './schedule-finished-dialog.component.html',
  styleUrls: ['./schedule-finished-dialog.component.scss']
})
export class ScheduleFinishedDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ScheduleState) { }

  ngOnInit(): void {
  }

  getMessage = (): string => {
    return this.data.status === Status.success
      ? 'Schedule operation succeded'
      : 'Schedule operation failed due to:';
  };

  getCssClass = (): string => {
    return 'dialog ' + (this.data.status === Status.fail ? 'dialog-failed' : '')
  }

}
