import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters',
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 23): string {
    return value?.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
