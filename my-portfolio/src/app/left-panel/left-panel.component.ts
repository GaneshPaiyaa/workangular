import { Component, OnInit } from '@angular/core';
import leftMenuData from '../../assets/json/leftMenu.json';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

	menuData: [] = leftMenuData;
	
	constructor() {

	}

	ngOnInit() {
	}

}
