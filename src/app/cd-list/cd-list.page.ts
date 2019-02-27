import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {LendCdComponent} from './lend-cd/lend-cd.component';
import {Cd} from '../models/cd.model';
import {Subscription} from 'rxjs';
import {DonneesService} from '../services/donnees.service';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.page.html',
  styleUrls: ['./cd-list.page.scss'],
})
export class CdListPage implements OnInit {

  cds: Cd[];
  cdsSubscription: Subscription;

  constructor(public modalController: ModalController, private donneesService: DonneesService) { }

  ngOnInit() {
    this.cdsSubscription = this.donneesService.cdSubject.subscribe(
        (cds: Cd[]) => {
          this.cds = cds;
        }
    );
    this.donneesService.emitCdSubject();
  }

  ngOnDestroy() {
    this.cdsSubscription.unsubscribe();
  }

  async presentModal(cd) {
    const modal = await this.modalController.create({
      component: LendCdComponent,
      componentProps: { cd: cd }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail.data.result !== '') {
        this.donneesService.lendOne(cd, detail.data.result);
      }
    });

    return await modal.present();
  }

}
