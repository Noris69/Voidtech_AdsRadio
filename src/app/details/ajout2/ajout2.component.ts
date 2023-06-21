import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajout2',
  templateUrl: './ajout2.component.html',
  styleUrls: ['./ajout2.component.scss'],
})
export class Ajout2Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
