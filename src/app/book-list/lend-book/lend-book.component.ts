import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.scss'],
})
export class LendBookComponent implements OnInit {

  @Input() book: Book;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {}


  async closeModal() {
    await this.modalController.dismiss({
      'result': ''
    });
  }

  async responseModal(action: boolean) {
    await this.modalController.dismiss({
      'result': action
    });
  }

}
