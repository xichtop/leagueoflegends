import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'second-button',
  templateUrl: './second-button.component.html',
  styleUrls: ['./second-button.component.scss']
})
export class SecondButtonComponent implements OnInit, AfterViewInit {
  @Input() label = 'My button';
  @Input() color = 'main';

  @Output() onClick = new EventEmitter();

  @ViewChild('canvasButton') canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    if (this.color === 'main') {
      this.ctx.fillStyle = "#D0A85C";
    } else {
      this.ctx.fillStyle = "#0BC6E3";
    }
    this.ctx.moveTo(0, 10);
    this.ctx.lineTo(10, 0);
    this.ctx.lineTo(220, 0);
    this.ctx.lineTo(220, 20);
    this.ctx.lineTo(220 - 10, 30);
    this.ctx.lineTo(0, 30);
    this.ctx.lineTo(0, 10);
    this.ctx.fill();
  }

  onMouseHover() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 220, 30);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(220, 0);
    this.ctx.lineTo(220, 30);
    this.ctx.lineTo(0, 30);
    this.ctx.lineTo(0, 0);
    this.ctx.fill();
  }

  onMouseOut() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 220, 30);
    this.ctx.moveTo(0, 10);
    this.ctx.lineTo(10, 0);
    this.ctx.lineTo(220, 0);
    this.ctx.lineTo(220, 20);
    this.ctx.lineTo(220 - 10, 30);
    this.ctx.lineTo(0, 30);
    this.ctx.lineTo(0, 10);
    this.ctx.fill();
  }

  onButtonClick() {
    this.onClick.emit()
  }
}
