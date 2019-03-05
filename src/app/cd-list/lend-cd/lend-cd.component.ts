import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Cd} from '../../models/cd.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.component.html',
  styleUrls: ['./lend-cd.component.scss'],
})
export class LendCdComponent implements OnInit {

  @Input() cd: Cd;

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
