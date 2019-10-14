import { Component, OnInit, Input} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  
  @Input() rContents :any;
  
  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
