import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere por favor...');

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
      // duration: 2000
    });
    await this.loading.present();
  }

}
