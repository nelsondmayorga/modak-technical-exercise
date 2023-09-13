import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    return `https://www.artic.edu/iiif/2/${value}/full/843,/0/default.jpg`;
  }
}
