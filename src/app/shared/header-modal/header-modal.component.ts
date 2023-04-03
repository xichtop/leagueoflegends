import { Component } from '@angular/core';

import { header } from '../../../assets/fake-data/header';

@Component({
  selector: 'header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent {

  header = header;
  imgSrc = this.header.game.items[0].url;

  closeModel(): void {
    let modal = document.getElementById("myModal");
    let modelContainer = document.getElementById('modalContainer');
    modal!.style.transform = "translateY(-100%)";
    // modal!.style.display = "none";
  }

  onHoverItem(index: number, list: any){
    this.imgSrc = list.items[index].url;
  }

  onMouseOut(){
    this.imgSrc = this.header.game.items[0].url;
  }

}
