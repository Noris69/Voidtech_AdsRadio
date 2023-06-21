import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  currentSlide: number = 1;

  nextSlide() {
    this.currentSlide++;
  }

  finishOnboarding() {
  }

}
