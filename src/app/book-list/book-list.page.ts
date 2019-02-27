import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LendBookComponent} from './lend-book/lend-book.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LendBookComponent,
      componentProps: { value: 123 }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
    });

    return await modal.present();
  }


}
