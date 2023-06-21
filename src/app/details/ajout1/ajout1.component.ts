import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajout1',
  templateUrl: './ajout1.component.html',
  styleUrls: ['./ajout1.component.scss'],
})
export class Ajout1Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
