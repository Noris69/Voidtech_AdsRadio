import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Howl } from 'howler';

@Component({
  selector: 'app-radio-details',
  templateUrl: './radio-details.page.html',
  styleUrls: ['./radio-details.page.scss'],
})
export class RadioDetailsPage implements OnInit {
  radioPlayer: Howl;
  isPlaying: boolean = false;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController) {
    
    this.radioPlayer = new Howl({
      src: ['https://radiomars.ice.infomaniak.ch/radiomars-128.mp3'],
      html5: true,
      format: ['mp3', 'aac'],
      autoplay: false,
      onplay: () => {
        this.isPlaying = true;
      },
      onpause: () => {
        this.isPlaying = false;
      },
      onstop: () => {
        this.isPlaying = false;
      }
    });
  }

  ngOnInit() {}

  playRadio() {
    this.radioPlayer.play();
  }

  pauseRadio() {
    this.radioPlayer.pause();
  }

  stopRadio() {
    this.radioPlayer.stop();
  }

  goBack() {
    this.navCtrl.back();
  }
}
