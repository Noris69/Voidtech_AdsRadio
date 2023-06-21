import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ajout3',
  templateUrl: './ajout3.component.html',
  styleUrls: ['./ajout3.component.scss'],
})
export class Ajout3Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
