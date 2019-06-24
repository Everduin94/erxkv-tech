import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// https://www.contentful.com/developers/docs/references/authentication/
const CONFIG = {
  space: 'cxts8zfs2vii',
  accessToken: 'wsUNnQ2gUg95AyrUr1AGyhu00kDo4bgQd23_ihXZTAQ',

  contentTypeIds: {
    header: '2IzEzGtCzwgE33zOwSCpeB',
    articles: 'article',
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getHeader() {
    return this.getEntry(CONFIG.contentTypeIds.header);
  }

  getArticles() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.articles})
    return from(promise).pipe(map(entries => entries.items), tap(console.log))
  }

  // ud = CONFIG.contentTypeIds.product
  getEntries(id, query?: object): Observable<Entry<any>[]> {
    // TODO: Double check this, because I updated to ES6 Spread
    this.cdaClient.getEntries().then(val => {
      console.log(val);
    })
    return from(this.cdaClient.getEntries()).pipe(map(entries => entries.items));
  }

  getEntry(id): Observable<any> {
      const promise = this.cdaClient.getEntry(id);
      return from(promise).pipe(map(entry => entry.fields), tap(console.log));
  }
}
