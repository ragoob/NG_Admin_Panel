import { Component, OnInit } from '@angular/core';
import { LayoutConfig } from 'src/app/config/layoutConfig';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private layout : LayoutService) { }
    config : LayoutConfig;
  ngOnInit() {
    this.config = new LayoutConfig();
  }

  toggleMenu(){
    
    this.layout.toggleMenu();
  }

}
