export enum WizardStepType {
    NetworkElement = 0,
    OperationType = 1,
    Summary = 2,
}

export interface StepConfig {
    label: string;
    description: string;
}

export type StepsConfig = {
    [key in WizardStepType]: StepConfig;
};

const stepsConfig: StepsConfig = {
    [WizardStepType.NetworkElement]: {
        label: 'Network Element',
        description: 'At least one Network Element shall be selected',
    },
    [WizardStepType.OperationType]: {
        label: 'Operation Type',
        description: 'At least one Operation Type shall be selected',
    },
    [WizardStepType.Summary]: {
        label: 'Summary',
        description: 'Statement of scheduled operation',
    },
};

export { stepsConfig };
