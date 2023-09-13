import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author',
})
export class AuthorPipe implements PipeTransform {
  transform(value: string, limit: number = 23): string {
    return !value ? 'No author registered' : value;
  }
}
