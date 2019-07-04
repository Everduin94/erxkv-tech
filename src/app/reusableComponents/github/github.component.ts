import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github=faGithub;

  constructor() { }

  ngOnInit() {
  }

}
