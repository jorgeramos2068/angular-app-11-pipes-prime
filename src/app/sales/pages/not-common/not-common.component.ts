import { Component } from '@angular/core';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
})
export class NotCommonComponent {
  public name: string = 'Catwoman';
  public gender: string = 'female';
  public invitationMap = {
    male: 'him',
    female: 'her',
  };
}
