import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper',
})
export class MyUpperPipe implements PipeTransform {
  transform(value: string, isUpper: boolean = true): string {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
