import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Hero[], sortBy: string = ''): Hero[] {
    switch (sortBy) {
      case 'name':
        return value.sort((hero1, hero2) => (hero1.name > hero2.name ? 1 : -1));
      case 'fly':
        return value.sort((hero1, hero2) => (hero1.fly > hero2.fly ? -1 : 1));
      case 'color':
        return value.sort((hero1, hero2) =>
          hero1.color > hero2.color ? 1 : -1
        );
      default:
        return value;
    }
  }
}
