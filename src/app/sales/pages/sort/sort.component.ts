import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
})
export class SortComponent {
  public upperFlag: boolean = true;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Spiderman',
      fly: false,
      color: Color.blue,
    },
    {
      name: 'Ironman',
      fly: true,
      color: Color.orange,
    },
  ];
  public sortBy: string = '';

  changeUpperFlag(): void {
    this.upperFlag = !this.upperFlag;
  }

  changeSortBy(value: string): void {
    this.sortBy = value;
  }
}
