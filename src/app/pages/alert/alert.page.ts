import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  title: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',	// Este rol permite que si se pulsa fuera se dispare este
          cssClass: 'secondary',
          handler: () => {
            console.log('Botón CANCELAR');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Botón OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertCtrl.create({
      header: 'Input:',
      subHeader: 'Nombre:',
      inputs: [
        {
          name: 'txtnombre',
          type: 'text',
          placeholder: 'Escribe tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Botón Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( dato ) => {
            this.title = dato.txtnombre;
            // console.log('Botón Ok');
          }
        }
      ]
    });

    await alert.present();
}


}
