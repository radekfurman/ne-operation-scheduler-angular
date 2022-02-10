import { Component, OnInit } from '@angular/core';
import { WizardService } from 'src/app/scheduler/services/wizard.service';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {
  }

}
