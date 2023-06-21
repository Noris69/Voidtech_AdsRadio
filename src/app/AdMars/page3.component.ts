import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
