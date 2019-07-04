import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './appComponents/page-not-found/page-not-found.component';
import { ShellComponent } from './appComponents/header/shell.component';
import { MainComponent } from './appComponents/main/main.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediumComponent } from './reusableComponents/medium/medium.component';
import { ImageToUrlPipe } from './pipes/image-to-url.pipe';
import { ArticlesComponent } from './featureComponents/articles/articles.component';
import { GithubComponent } from './reusableComponents/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ShellComponent,
    MainComponent,
    MdToHtmlPipe,
    MediumComponent,
    ImageToUrlPipe,
    ArticlesComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
