import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit, AfterViewInit  {

  @Input() label = 'My button';
  @Input() color = 'main';

  @Output() onClick = new EventEmitter();

  @ViewChild('canvasButton') canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "#dcdcdc";
    this.ctx.moveTo(0, 20);
    this.ctx.lineTo(20, 0);
    this.ctx.lineTo(205, 0);
    this.ctx.lineTo(205, 45);
    this.ctx.lineTo(185, 65);
    this.ctx.lineTo(0, 65);
    this.ctx.lineTo(0, 20);
    this.ctx.stroke();
  }

  onMouseHover() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 215, 75);
    this.ctx.lineTo(0, 0);
    this.ctx.lineTo(205, 0);
    this.ctx.lineTo(205, 65);
    this.ctx.lineTo(0, 65);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

  onMouseOut() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 215, 75);
    this.ctx.moveTo(0, 20);
    this.ctx.lineTo(20, 0);
    this.ctx.lineTo(205, 0);
    this.ctx.lineTo(205, 45);
    this.ctx.lineTo(185, 65);
    this.ctx.lineTo(0, 65);
    this.ctx.lineTo(0, 20);
    this.ctx.stroke();
  }

  onButtonClick() {
    this.onClick.emit()
  }

}
