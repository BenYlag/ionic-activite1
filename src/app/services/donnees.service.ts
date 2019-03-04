import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Book} from '../models/book.model';
import {Cd} from '../models/cd.model';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase/app';
import {LoadingController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DonneesService implements OnInit {

  constructor(private toastController: ToastController,
              private loadingCtrl: LoadingController,
              private storage: Storage) { }

  bookSubject = new Subject<any[]>();
  cdSubject = new Subject<any[]>();

    books: Book[] = [];

    cds: Cd[] = [];

    ngOnInit() {

    }

    emitBookSubject() {
    this.bookSubject.next(this.books.slice());
  }

  emitCdSubject() {
    this.cdSubject.next(this.cds.slice());
  }

  lendOne(objet, lendedTo: string) {
    if (lendedTo !== '') {
      objet.lended = true;
      objet.lendedTo = lendedTo;
    } else {
      objet.lended = false;
      objet.lendedTo = '';
    }
    this.storage.set('books', this.books);
    this.emitBookSubject();
    this.emitCdSubject();
  }

  retreiveLocalData() {
      this.storage.get('books').then(
          (list) => {
              if (list && list.length) {
                  this.books = list.slice();
              }
              this.emitBookSubject();
          }
      );
      this.storage.get('cds').then(
          (list) => {
              if (list && list.length) {
                  this.cds = list.slice();
              }
              this.emitCdSubject();
          }
      );
  }
  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('books').set(this.books).then(
          (data: DataSnapshot) => {
            resolve(data);
              this.emitBookSubject();
          },
          (error) => {
            reject(error);
          }
      );
      firebase.database().ref('cds').set(this.cds).then(
          (data: DataSnapshot) => {
            resolve(data);
            this.emitCdSubject();
          },
          (error) => {
            reject(error);
          }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/').on('value',
          (data: DataSnapshot) => {
            this.books = data.val().books;
            this.emitBookSubject();
            this.cds = data.val().cds;
            this.emitCdSubject();
            resolve('Données récupérées avec succès !');
          }, (error) => {
            reject(error);
          }
      );
    });
  }


    async onSaveList() {
        const loader = await this.loadingCtrl.create({
            message: 'Sauvegarde en cours'
        });
        await loader.present();
        this.saveData().then(
            () => {
                loader.dismiss();
                this.presentToast('Données enregistrées', 'success');
            },
            (error) => {
                loader.dismiss();
                this.presentToast(error, 'danger');
            }
        );
    }

    async onFetchList() {
        const loader = await this.loadingCtrl.create({
            message: 'Récuperation en cours…'
        });
        await loader.present();
        this.retrieveData().then(
            () => {
                loader.dismiss();
                this.presentToast('Récupération OK', 'success');
            },
            (error) => {
                loader.dismiss();
                this.presentToast(error, 'danger');
            }
        );
    }

    async presentToast(message: string, color: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: 'bottom',
            color: color
        });
        toast.present();
    }
}
