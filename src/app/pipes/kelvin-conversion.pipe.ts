import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinConversion'
})
export class KelvinConversionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return Math.round(1.8 * (value - 273) + 32);
  }
}
