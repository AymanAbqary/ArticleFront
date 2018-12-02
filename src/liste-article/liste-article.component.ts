import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from 'src/services/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  @Output()
  private sendingArticle = new EventEmitter();
  



  articles:any;
  currentPage:number=0;
  size:number=1;
  pages:Array<number>;
  uploadFolder = "http://localhost:7070/images";
  constructor(private articleService:ArticleService,private toasterService : ToastrService) { }

  ngOnInit() {
    this.Load();
  }

  Load(){
    this.articleService.listArticles(this.currentPage,this.size).subscribe(data=>{
      console.log(data['content']);
      this.articles=data['content'];
      this.pages=new Array(data['totalPages']);
    });
  }
  goTopage(i:number){
    this.currentPage=i;
    this.Load();
}
valueChange(){
  this.Load();
}

deleteArticle(id){
  this.articleService.deleteArticle(id).subscribe(data=>{
    this.toasterService.success("Suppression avec success");
    this.currentPage=0;
    this.size=1;
    this.Load();
  }); 
  
}

sendingArticleToEdit(article){
    this.articleService.article$=article;
}

}
