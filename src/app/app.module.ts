import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeArticleComponent } from 'src/liste-article/liste-article.component';
import { EditArticleComponent } from 'src/edit-article/edit-article.component';

const mesRoutes:Routes = [
  {  path:"articles",component:ListeArticleComponent},
  {  path:"edit",component:EditArticleComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListeArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,RouterModule.forRoot(mesRoutes),FormsModule,HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
