import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit, AfterViewInit {

  @Input() srcImg;
  @Input() title;
  @Input() mainTitle;
  @Input() content;
  @Input() index = 0;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const id = 'canvas-new-' + this.index;
    this.canvas = <HTMLCanvasElement> document.getElementById(id);
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#cacaca";
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(410, 0);
    this.ctx.lineTo(440, 30);
    this.ctx.lineTo(440, 180);
    this.ctx.lineTo(0, 180);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

  onMouseHover() {
    // const id = 'canvas-new-' + this.index;
    // this.canvas = <HTMLCanvasElement> document.getElementById(id);
    // this.ctx = this.canvas.getContext("2d")!;
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 440, 180);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(440, 0);
    this.ctx.lineTo(440, 180);
    this.ctx.lineTo(0, 180);
    this.ctx.lineTo(0, 0);
    this.ctx.moveTo(440, 0);
    this.ctx.lineTo(410, 1);
    this.ctx.moveTo(439, 0);
    this.ctx.lineTo(439, 30);
    this.ctx.moveTo(440, 1);
    this.ctx.lineTo(410, 2);
    this.ctx.moveTo(438, 1);
    this.ctx.lineTo(438, 30);
    this.ctx.stroke();
  }

  onMouseOut() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 440, 180);
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(410, 0);
    this.ctx.lineTo(440, 30);
    this.ctx.lineTo(440, 180);
    this.ctx.lineTo(0, 180);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

}
