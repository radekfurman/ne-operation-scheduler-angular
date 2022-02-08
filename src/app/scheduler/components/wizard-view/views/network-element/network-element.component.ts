import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NetworkElement, networksElementTestData } from 'src/app/scheduler/mocks/networkElementsData';
import { WizardService } from 'src/app/scheduler/services/wizard.service';
@Component({
  selector: 'network-element',
  templateUrl: './network-element.component.html',
  styleUrls: ['./network-element.component.scss']
})
export class NetworkElementComponent implements OnInit {

  displayedColumns: string[] = ['ipAddress', 'name', 'distname'];
  dataSource = new MatTableDataSource(networksElementTestData);

  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onRowToggle(row: NetworkElement, selectedRows: NetworkElement[]) {

    if (selectedRows.includes(row)) {
      this.wizardService.setNetworkElements(selectedRows.filter(r => r !== row));
    }
    else {
      this.wizardService.setNetworkElements([...selectedRows, row]);
    }
  }
}
