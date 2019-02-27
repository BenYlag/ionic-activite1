import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LendCdComponent} from './lend-cd/lend-cd.component';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.page.html',
  styleUrls: ['./cd-list.page.scss'],
})
export class CdListPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LendCdComponent,
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
