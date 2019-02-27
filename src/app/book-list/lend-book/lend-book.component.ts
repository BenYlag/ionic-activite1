import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.scss'],
})
export class LendBookComponent implements OnInit {

  @Input() value: number;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss({
      'result': this.value
    });
  }
}
