import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';
import {DonneesService} from '../services/donnees.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  constructor(private loadingCtrl: LoadingController,
              private donneesService: DonneesService) { }

  ngOnInit() {
  }

  onSaveList() {
    this.donneesService.onSaveList();
  }

  onFetchList() {
    this.donneesService.onFetchList();
  }
}
