import { Pipe, PipeTransform } from '@angular/core';
import { addCpfMask } from '../util/format-cpf-cnpj';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return addCpfMask(String(value));
  }
}
