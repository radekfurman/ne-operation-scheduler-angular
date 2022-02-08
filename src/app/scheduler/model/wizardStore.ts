import { OperationTypeComponent } from "../components/wizard-view/views/operation-type/operation-type.component";
import { WizardStepType } from "./stepsConfig";

export interface NetworkElement {
    id: number;
    ipAddress: string;
    type: string;
    distName: string;
    name: string;
    technology: string;
    swVersion: string;
}

export enum OperationType {
    Update = 'UpdateSoftware',
    Downgrade = 'DowngradeSoftware',
}

export interface OperationData {
    type: OperationType
    title: string;
    description: string;
}

export enum Status {
    init = 'INIT',
    ongoing = 'ONGOING',
    success = 'SUCCESS',
    fail = 'FAIL',
}

export interface ScheduleState {
    status: Status,
    networkElements: NetworkElement[]
    error: string | undefined
}

export interface WizardStore { wizardStep: WizardStepType, selectedNetworkElements: NetworkElement[], selectedOperation: OperationType | undefined, status: Status }