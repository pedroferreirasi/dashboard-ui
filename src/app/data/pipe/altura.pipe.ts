import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altura',
  pure: false,
})
export class AlturaPipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    return value + ' m';
  }
}
