import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './appComponents/page-not-found/page-not-found.component';
import { ShellComponent } from './appComponents/header/shell.component';
import { MainComponent } from './appComponents/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
