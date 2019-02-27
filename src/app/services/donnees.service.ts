import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Book} from '../models/book.model';
import {Cd} from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor() { }

  bookSubject = new Subject<any[]>();
  cdSubject = new Subject<any[]>();

  books = [
      new Book('Livre 1', 'Le meilleur livre du monde', 0, true, 'John Doe'),
      new Book('Livre 2', 'Le deuxieme meilleur livre du monde', 1, false, ''),
      new Book('Livre 3', 'Le troisieme meilleur livre du monde', 2, false, ''),
  ];

  cds = [
    new Cd('CD 1', 'Le meilleur CD du monde', 0, true, 'Jane Doe'),
    new Cd('CD 2', 'Le deuxieme meilleur CD du monde', 1, false, ''),
    new Cd('CD 3', 'Le troisième meilleur CD du monde', 2, true, 'John Doe'),
  ];

  emitBookSubject() {
    this.bookSubject.next(this.books.slice());
  }

  emitCdSubject() {
    this.cdSubject.next(this.cds.slice());
  }

  lendOne(objet, lendedTo: string) {
    if (lendedTo !== '') {
      objet.lended = true;
      objet.lendedTo = lendedTo;
    } else {
      objet.lended = false;
      objet.lendedTo = '';
    }

    this.emitBookSubject();
    this.emitCdSubject();
  }

}
