import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  clients: string[] = ['Mary', 'Diana', 'John', 'Paul', 'Ringo'];
  clientsMap = {
    '=0': 'no clients',
    '=1': 'one client',
    other: '# clients',
  };

  // KeyValue
  person = {
    name: 'Bruce',
    lastName: 'Wayne',
    age: 40,
    city: 'Gotham City',
  };

  // JsonPipe
  heroes = [
    {
      name: 'Superman',
      fullName: 'Clark Kent',
    },
    {
      name: 'Batman',
      fullName: 'Bruce Wayne',
    },
    {
      name: 'Wonder Woman',
      fullName: 'Diana Prince',
    },
  ];

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

  // Async Pipe
  myObservable = interval(1000);
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data is ok');
    }, 3000);
  });
}
