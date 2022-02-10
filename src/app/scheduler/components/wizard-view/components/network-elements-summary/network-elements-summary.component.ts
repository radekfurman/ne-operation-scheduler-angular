import { Component, OnInit } from '@angular/core';
import { WizardService } from 'src/app/scheduler/services/wizard.service';

@Component({
  selector: 'network-elements-summary',
  templateUrl: './network-elements-summary.component.html',
  styleUrls: ['./network-elements-summary.component.scss']
})
export class NetworkElementsSummaryComponent implements OnInit {
  displayedColumns: string[] = ['ipAddress', 'name', 'distname'];

  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {
  }

}
