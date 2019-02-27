import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.component.html',
  styleUrls: ['./lend-cd.component.scss'],
})
export class LendCdComponent implements OnInit {

  @Input() value: number;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss({
      'result': this.value
    });
  }

}
