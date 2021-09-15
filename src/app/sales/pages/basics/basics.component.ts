import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {
  public lowerName: string = 'batman';
  public upperName: string = 'BATMAN';
  public fullName: string = 'bRuCE wAyNe';

  public myDate: Date = new Date();
}
