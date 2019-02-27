import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LendBookComponent} from './lend-book/lend-book.component';
import {Book} from '../models/book.model';
import {Subscription} from 'rxjs';
import {DonneesService} from '../services/donnees.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  books: Book[];
  booksSubscription: Subscription;

  constructor(public modalController: ModalController, private donneesService: DonneesService) { }

  ngOnInit() {
    this.booksSubscription = this.donneesService.bookSubject.subscribe(
        (books: Book[]) => {
          this.books = books;
        }
    );
    this.donneesService.emitBookSubject();
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  async presentModal(book) {
    const modal = await this.modalController.create({
      component: LendBookComponent,
      componentProps: { book: book }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail.data.result !== '') {
        this.donneesService.lendOne(book, detail.data.result);
      }
    });


    return await modal.present();
  }


}
