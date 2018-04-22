import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if(!value)
      return null;

    return value.toLowerCase().split(' ').map((word, i) => {
      return (word && (i < 1 || !this.isPreposition(word))) ? this.toTitleCase(word): word;
    }).join(' ');
  }

  private toTitleCase(word: string): string {
    return word[0].toUpperCase() + word.substr(1);
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(word);
  }
}