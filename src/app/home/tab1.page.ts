import { Component,ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AudioRecordingService } from "./audio-recording.service";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy{
  isRecording = false;
  recordedTime;
  blobUrl;
  teste;
  private stream: MediaStream;
  private recorder: MediaRecorder;
  public recording: boolean = false;
  public audioUrl: string;
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  language: string;
  menuPages = [
    { title: 'Accueil', url: '/page1', icon: 'home' },
    { title: 'Notifications', url: '/page/page', icon: 'person' },
    { title: 'Paiement', url: '/page/page1', icon: 'settings' },
    { title: 'A propos de nous', url: '/page/page2', icon: 'bookmark' },
    { title: 'Aide', url: '/page/page3', icon: 'chatbox' },
  ];

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController,
    private router: Router
  ) {
    this.audioRecordingService
      .recordingFailed()
      .subscribe(() => (this.isRecording = false));
    this.audioRecordingService
      .getRecordedTime()
      .subscribe(time => (this.recordedTime = time));
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.teste = data;
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
    });
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getCurrentLang();
  }
  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  download(): void {
    const url = window.URL.createObjectURL(this.teste.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = this.teste.title;
    link.click();
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

  goToPackPage() {
    this.router.navigate(['/pack']);
  }
  goToPackDetails(route: string) {
    this.router.navigate([route]);
  }
  goToPackDetails1(){
    this.router.navigate(['/details/pack1']);

  }
  goToPackDetails2(){
    this.router.navigate(['/details/pack2']);

  }
  goToPackDetails3(){
    this.router.navigate(['/details/pack3']);

  }
  goToPack1() {
    this.router.navigate(['/details/pack1']);
  }
  
}
