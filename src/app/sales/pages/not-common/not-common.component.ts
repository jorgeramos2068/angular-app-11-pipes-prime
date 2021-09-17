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

  changePerson(): void {
    if (this.gender === 'female') {
      this.name = 'Batman';
      this.gender = 'male';
    } else {
      this.name = 'Catwoman';
      this.gender = 'female';
    }
  }

  deleteClient(): void {
    if (this.clients.length > 0) {
      this.clients.pop();
    } else {
      this.clients = ['Mary', 'Diana', 'John'];
    }
  }
}
