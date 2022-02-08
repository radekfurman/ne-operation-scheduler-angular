import { WizardStepType } from "./stepsConfig";
import { Status, WizardStore } from "./wizardStore";

export interface NavigationPrecondition {
    canCancel: (state: WizardStore) => boolean;
    canGoNext: (state: WizardStore) => boolean;
    canGoBack: (state: WizardStore) => boolean;
    canSchedule: (state: WizardStore) => boolean;
}

export type NavigationConfiguration = {
    [key in WizardStepType]: NavigationPrecondition;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const navigationConfiguration: NavigationConfiguration = {
    [WizardStepType.NetworkElement]: {
        canCancel: (state: WizardStore): boolean => {
            return state.selectedNetworkElements.length > 0;
        },
        canGoNext: (state: WizardStore): boolean => {
            return state.selectedNetworkElements.length > 0;
        },
        canGoBack: (state: WizardStore): boolean => false,
        canSchedule: (state: WizardStore): boolean => false
    },
    [WizardStepType.OperationType]: {
        canCancel: (state: WizardStore): boolean => {
            return state.selectedNetworkElements.length > 0;
        },
        canGoNext: (state: WizardStore): boolean => {
            return !!state.selectedOperation;
        },
        canGoBack: (state: WizardStore): boolean => true,
        canSchedule: (state: WizardStore): boolean => false
    },
    [WizardStepType.Summary]: {
        canCancel: (state: WizardStore): boolean => {
            return state.selectedNetworkElements.length > 0;
        },
        canGoNext: (state: WizardStore): boolean => false,
        canGoBack: (state: WizardStore): boolean => true,
        canSchedule: (state: WizardStore): boolean => {
            return state.status === Status.init;
        }
    },
};
/* eslint-enable */
export { navigationConfiguration };
