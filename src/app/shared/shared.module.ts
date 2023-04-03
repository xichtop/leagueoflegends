import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { NewComponent } from './new/new.component';
import { SecondButtonComponent } from './second-button/second-button.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainButtonComponent,
    HeaderModalComponent,
    NewComponent,
    SecondButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    MainButtonComponent,
    NewComponent,
    SecondButtonComponent,
    FooterComponent
  ]
})
export class SharedModule { }
