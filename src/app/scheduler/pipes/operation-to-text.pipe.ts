import { Pipe, PipeTransform } from '@angular/core';
import { OperationType } from '../model/wizardStore';

@Pipe({
  name: 'operationToText',
  pure: true
})
export class OperationToTextPipe implements PipeTransform {
  operationToText: { [key in OperationType]: string } = {
    [OperationType.Update]: 'Update Software',
    [OperationType.Downgrade]: 'Downgrade Software'
  };
  transform(value: OperationType | undefined | null, ...args: unknown[]): string {
    return value ? this.operationToText[value] : '';
  }

}
