import { OperationData, OperationType } from "../model/wizardStore";

export const operations: OperationData[] = [
    {
        type: OperationType.Update,
        title: 'Update Software',
        description: 'SW upgrade on NE to the latest version'
    },
    {
        type: OperationType.Downgrade,
        title: 'Downgrade Software',
        description: 'SW downgrade to the previous one'
    }
]