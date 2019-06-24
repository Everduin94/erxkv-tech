import { Component, OnInit } from '@angular/core';

import { faMediumM } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  faMedium = faMediumM;

  constructor() { }

  ngOnInit() {
  }

}
