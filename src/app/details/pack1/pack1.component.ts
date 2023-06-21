import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pack1',
  templateUrl: './pack1.component.html',
  styleUrls: ['./pack1.component.scss'],
})
export class Pack1Component implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goBack() {
    this.navCtrl.back();
  }
}
