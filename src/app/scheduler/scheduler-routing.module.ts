import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerWizardComponent } from './components/scheduler-wizard/scheduler-wizard.component';

const routes: Routes = [
    { path: '', redirectTo: '/scheduler', pathMatch: 'prefix' },
    { path: 'scheduler', component: SchedulerWizardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchedulerRoutingModule { }