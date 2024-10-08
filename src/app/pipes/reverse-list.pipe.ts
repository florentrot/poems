import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReverseListPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      return value.slice().reverse();
    }
    return value;
  }
}

