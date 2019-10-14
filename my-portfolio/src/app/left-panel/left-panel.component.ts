import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

	@Input() menuData : any;

	constructor(private data: DataService) { }

	ngOnInit() { }

	onClickScrollToTop(){
		this.data.scrollToTop();
	}
}
