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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';




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
import { NetworkElementsSummaryComponent } from './components/wizard-view/components/network-elements-summary/network-elements-summary.component';
import { OperationToTextPipe } from './pipes/operation-to-text.pipe';
import { ScheduleFinishedDialogComponent } from './components/wizard-view/components/schedule-error-dialog/schedule-finished-dialog.component';

@NgModule({
  declarations: [
    SchedulerWizardComponent,
    WizardNavigationComponent,
    WizardViewComponent,
    NetworkElementComponent,
    OperationTypeComponent,
    SummaryComponent,
    NetworkElementsSummaryComponent,
    OperationToTextPipe,
    ScheduleFinishedDialogComponent
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
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    SchedulerRoutingModule,
  ],
  exports: [
  ],
  providers: [WizardService]
})
export class SchedulerModule { }
