import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pack3',
  templateUrl: './pack3.component.html',
  styleUrls: ['./pack3.component.scss'],
})
export class Pack3Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
