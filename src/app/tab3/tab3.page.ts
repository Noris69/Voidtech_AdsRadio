import { Component } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  language: string;
  user: any;

  constructor(
    private router: Router,
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLang();
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); 
  }

  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Langues',
      buttons: [{
        text: 'Français',
        icon: 'language-outline',
        handler: () => {
          this.language = 'fr';
          this.translateConfigService.setLanguage('fr');
        }
      }, {
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
      },]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
