import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$;

  constructor(private cs: ContentfulService) { }

  ngOnInit() {
    this.articles$ = this.cs.getArticles();
  }

}
