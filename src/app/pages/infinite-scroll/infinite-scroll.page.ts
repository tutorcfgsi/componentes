import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando los siguientes....');

    setTimeout(() => {
      if (this.data.length > 50){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        // Salir del método
        return;
      }

      // Creamos un nuevo array de 20 elementos
      const nuevoArr = Array(20);

      // Y los añadiomos al array Data
      this.data.push(...nuevoArr);

      // Cancelamos el Infinite Scroll
      event.target.complete();
    }, 1000);
  }

}
