import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  header$;

  faSearch = faSearchPlus;
  faVrCardboard = faPuzzlePiece;

  constructor(private cs: ContentfulService) { }

  ngOnInit() {
    this.header$ = this.cs.getHeader();

    this.cs.getHeader().subscribe(val => {
      console.log(val.headerImage.fields.file.url);
    })
  }

}
