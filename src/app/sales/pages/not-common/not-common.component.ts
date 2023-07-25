import { Component } from '@angular/core';

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
})
export class NotCommonComponent {
  // i18nSelect
  public name: string = 'Catwoman';
  public gender: string = 'female';
  public invitationMap = {
    male: 'him',
    female: 'her',
  };

  // i18nPlural
  clients: string[] = ['Mary', 'Diana', 'John'];
  clientsMap = {
    '=0': 'no clients',
    '=1': 'one client',
    other: '# clients',
  };
}
