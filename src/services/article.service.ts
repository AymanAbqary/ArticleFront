import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from 'src/entities/article';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private BASE_URL="http://localhost:7070";
  private BASE_ARTICLE="/api/articles";

  constructor(private http:HttpClient) { }


  public listArticles(page,size){
    const options = { params: new HttpParams().set('page', page).set('size', size) };
    return this.http.get(this.BASE_URL+this.BASE_ARTICLE+"/",options);
  }
  public deleteArticle(id){
    const options = { params: new HttpParams().set('id', id) };
    return this.http.delete(this.BASE_URL+this.BASE_ARTICLE+"/",options);
  }

  public saveOrUpdate(article:Article,file:File){
    const formData:FormData = new FormData();
    formData.append('article', JSON.stringify(article))
  
    formData.append('img', file,file.name);
    //const req=new HttpRequest('POST', this.BASE_URL+this.BASE_ARTICLE+"/", formData);
    //return this.http.request(req);
    return this.http.post(this.BASE_URL+this.BASE_ARTICLE+"/",formData);
    
  }

  
}
