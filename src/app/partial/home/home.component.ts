import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './../../services/home.service';
import { news } from '../../../assets/fake-data/new';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  newList = news;
  titleImgSrc = "../../../assets/images/title/title.png";
  videoSrc = "../../../assets/videos/hero/assassin.webm";
  imgHeroSrc = "../../../assets/images/hero/assassin.png";
  iconHeroSrc = "../../../assets/images/hero/assassin.svg";
  indexHero = 0;
  indexSkin = 0;
  intervalChangeHero;
  intervalChangeImgHero;
  intervalChangeSkin;
  changeTitleImgSubscription : Subscription;
  animation = false;

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.changeTitleImgSubscription = this.homeService.changeTitleImg$.subscribe( language => {
      if (language === 'vn') {
        this.titleImgSrc = "../../../assets/images/title/title.png";
      } else {
        this.titleImgSrc = "../../../assets/images/title/title_en.png";
      }
    });
    setTimeout(() => {
      this.animation = true;
    }, 1);
  }

  ngOnDestroy(): void {
    if (this.changeTitleImgSubscription) {
      this.changeTitleImgSubscription.unsubscribe();
    }
    if (this.intervalChangeSkin) {
      clearInterval(this.intervalChangeSkin);
    }
    this.clearInterval();
  }

  ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas-video');
    console.log('canvas', canvas);
    const ctx = canvas.getContext("2d");
    ctx!.lineWidth = 1;
    ctx!.strokeStyle = "#EDEDED";
    ctx!.moveTo(0, 0);
    ctx!.lineTo(1350, 0);
    ctx!.lineTo(1380, 30);
    ctx!.lineTo(1380, 500);
    ctx!.lineTo(0, 500);
    ctx!.lineTo(0, 0);
    ctx!.stroke();
    this.refreshInterval();
    this.intervalChangeSkin = setInterval(() => {
      this.indexSkin += 1;
      if (this.indexSkin > 3) {
        this.indexSkin = 0;
      }
    }, 2000);
  }

  onPlayFree() {
  }

  refreshInterval() {
    this.intervalChangeHero = setInterval(() => {
      this.indexHero += 1;
      if (this.indexHero > 5) {
        this.indexHero = 0;
      }
      this.switchSrcVideoAndImg();
    }, 7000);
  }

  clearInterval() {
    if (this.intervalChangeHero) {
      clearInterval(this.intervalChangeHero);
    }
  }

  switchSrcVideoAndImg() {
    this.animation = !this.animation;
    switch (this.indexHero) {
      case 0:
          this.videoSrc = "../../../assets/videos/hero/assassin.webm";
          this.imgHeroSrc = "../../../assets/images/hero/assassin.png";
          this.iconHeroSrc = "../../../assets/images/hero/assassin.svg";
          break;
        case 1:
          this.videoSrc = "../../../assets/videos/hero/fighter.webm";
          this.imgHeroSrc = "../../../assets/images/hero/fighter.png";
          this.iconHeroSrc = "../../../assets/images/hero/fighter.svg";
          break;
        case 2:
          this.videoSrc = "../../../assets/videos/hero/mage.webm";
          this.imgHeroSrc = "../../../assets/images/hero/mage.png";
          this.iconHeroSrc = "../../../assets/images/hero/mage.svg";
          break;
        case 3:
          this.videoSrc = "../../../assets/videos/hero/archer.webm";
          this.imgHeroSrc = "../../../assets/images/hero/archer.png";
          this.iconHeroSrc = "../../../assets/images/hero/archer.svg";
          break;
        case 4:
          this.videoSrc = "../../../assets/videos/hero/support.webm";
          this.imgHeroSrc = "../../../assets/images/hero/support.png";
          this.iconHeroSrc = "../../../assets/images/hero/support.svg";
          break;
        case 5:
          this.videoSrc = "../../../assets/videos/hero/tanker.webm";
          this.imgHeroSrc = "../../../assets/images/hero/tanker.png";
          this.iconHeroSrc = "../../../assets/images/hero/tanker.svg";
          break;
        default:
          this.videoSrc = "../../../assets/videos/hero/assassin.webm";
          this.imgHeroSrc = "../../../assets/images/hero/assassin.png";
          this.iconHeroSrc = "../../../assets/images/hero/assassin.svg";
    }
  }

  onChangeHero(index) {
    this.clearInterval();
    this.indexHero = index;
    this.switchSrcVideoAndImg();
    this.refreshInterval();
  }

}
