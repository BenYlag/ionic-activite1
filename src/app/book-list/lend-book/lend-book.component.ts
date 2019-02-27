import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Book} from '../../models/book.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.scss'],
})
export class LendBookComponent implements OnInit {

  @Input() book: Book;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {}

  async onSubmitForm(form: NgForm) {
    await this.modalController.dismiss({
      'lendedTo': form.value.lendedTo
    });
  }

  async retourner() {
    await this.modalController.dismiss({
      'lendedTo': ''
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }



}
