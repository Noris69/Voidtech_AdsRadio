import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Howl } from 'howler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  language: string;
  radioPlayer: Howl;

  constructor(
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController,
    private navCtrl: NavController
  ) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLang();

    this.radioPlayer = new Howl({
      src: ['https://radiomars.ice.infomaniak.ch/radiomars-128.mp3'],
      html5: true,
      format: ['mp3', 'aac'],
      autoplay: false
    });
  }

  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Langues',
      buttons: [
        {
          text: 'Français',
          icon: 'language-outline',
          handler: () => {
            this.language = 'fr';
            this.translateConfigService.setLanguage('fr');
          }
        },
        {
          text: 'Arabe',
          icon: 'language-outline',
          handler: () => {
            this.language = 'ar';
            this.translateConfigService.setLanguage('ar');
          }
        },
        {
          text: 'ⵜⴰⵎⴰⵣⵉɣⵜ',
          icon: 'language-outline',
          handler: () => {
            this.language = 'am';
            this.translateConfigService.setLanguage('am');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  playRadio() {
    this.radioPlayer.play();
  }

  pauseRadio() {
    this.radioPlayer.pause();
  }

  stopRadio() {
    this.radioPlayer.stop();
  }

  openRadioDetails() {
    this.navCtrl.navigateForward('radio-details');
  }
}
