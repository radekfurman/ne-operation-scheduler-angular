import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { take } from 'rxjs';
import { operations } from 'src/app/scheduler/mocks/operationsData';
import { OperationType } from 'src/app/scheduler/model/wizardStore';
import { WizardService } from 'src/app/scheduler/services/wizard.service';

@Component({
  selector: 'operation-type',
  templateUrl: './operation-type.component.html',
  styleUrls: ['./operation-type.component.scss']
})
export class OperationTypeComponent implements OnInit {
  operationsData = operations;
  selectedOperation: OperationType | undefined = undefined;
  constructor(private wizardServce: WizardService) { }

  ngOnInit(): void {
    this.wizardServce.selectedOperation
      .pipe(take(1))
      .subscribe((op: OperationType | undefined) => {
        this.selectedOperation = op;
      });
  }

  onOperationsChange(event: MatButtonToggleChange) {
    this.wizardServce.setSelectedOperation(event.value);
  }
}
