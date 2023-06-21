import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
