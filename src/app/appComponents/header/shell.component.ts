import { Component, OnInit } from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  faAngular = faAngular;

  constructor() { }

  ngOnInit() {
  }

}
