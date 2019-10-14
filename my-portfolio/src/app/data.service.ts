import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  scrollToTop(){
    window.scroll(0,0);
  }
}
