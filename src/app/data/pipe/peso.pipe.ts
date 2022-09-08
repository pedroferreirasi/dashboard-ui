import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peso',
})
export class PesoPipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    return value + ' Kg';
  }
}
