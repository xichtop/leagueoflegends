import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  changeTitleImg$ = new Subject();

  constructor() { }
}
