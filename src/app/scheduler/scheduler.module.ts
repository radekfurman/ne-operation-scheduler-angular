import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { SchedulerWizardComponent } from './components/scheduler-wizard/scheduler-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { WizardNavigationComponent } from './components/wizard-navigation/wizard-navigation.component';
import { WizardService } from './services/wizard.service';
import { WizardViewComponent } from './components/wizard-view/wizard-view.component';
import { NetworkElementComponent } from './components/wizard-view/views/network-element/network-element.component';
import { OperationTypeComponent } from './components/wizard-view/views/operation-type/operation-type.component';
import { SummaryComponent } from './components/wizard-view/views/summary/summary.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SchedulerWizardComponent,
    WizardNavigationComponent,
    WizardViewComponent,
    NetworkElementComponent,
    OperationTypeComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    SchedulerRoutingModule
  ],
  exports: [
  ],
  providers: [WizardService]
})
export class SchedulerModule { }
