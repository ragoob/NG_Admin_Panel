import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input() selfLayout : any = ''
  constructor() { }

  ngOnInit() {
  }

}
