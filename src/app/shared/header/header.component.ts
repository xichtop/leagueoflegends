import { Component } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private translateService: TranslateService,
    private homeService: HomeService
  ) {}

  language = 'vn';

  openModel(): void {
    let modal = document.getElementById("myModal");
    modal!.style.transform = "translateY(0)";
    window.onclick = function(event) {
      if (event.target == modal) {
        modal!.style.transform = "translateY(-100%)";
      }
    }
  }

  changeLanguage(country: string) {
    this.language = country;
    this.translateService.use(country);
    this.homeService.changeTitleImg$.next(country);
  }
}
