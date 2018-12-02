import { Component, OnInit } from '@angular/core';
import { Article } from 'src/entities/article';
import { ArticleService } from 'src/services/article.service';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article:Article=new Article();
  selectedFile:File= null;


  constructor(private articleService:ArticleService) { }

  ngOnInit() {
  }
  save(){
    this.articleService.saveOrUpdate(this.article,this.selectedFile).subscribe(data=>{
      console.log(data);  
    })
  }

  onSelectedFile(event){
    console.log(event);

    this.selectedFile= <File>event.target.files[0];
    this.article.img=this.selectedFile.name;
    console.log("image nom", this.selectedFile.name);
  }

}
