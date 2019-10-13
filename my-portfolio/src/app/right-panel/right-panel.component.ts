import { Component, OnInit } from '@angular/core';
import rightContentData from '../../assets/json/rightContent.json';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
	
  rContents = rightContentData; 
  
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
