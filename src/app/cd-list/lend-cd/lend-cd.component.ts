import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Cd} from '../../models/cd.model';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.component.html',
  styleUrls: ['./lend-cd.component.scss'],
})
export class LendCdComponent implements OnInit {

  @Input() cd: Cd;

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
