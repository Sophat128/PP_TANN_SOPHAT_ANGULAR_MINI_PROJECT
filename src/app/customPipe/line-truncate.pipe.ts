import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineTruncate'
})
export class LineTruncatePipe implements PipeTransform {

  transform(value: string): string {
    const lines = value.split('\n');
    if (lines.length <= 3) {
      return value;
    } else {
      let truncatedValue = '';
      for (let i = 0; i < 3; i++) {
        truncatedValue += lines[i] + '\n';
      }
      return truncatedValue.trim() + '...';
    }
  }

}
