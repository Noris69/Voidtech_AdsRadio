import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pack2',
  templateUrl: './pack2.component.html',
  styleUrls: ['./pack2.component.scss'],
})
export class Pack2Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
