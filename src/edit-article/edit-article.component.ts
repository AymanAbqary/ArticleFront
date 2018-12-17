import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/entities/article';
import { ArticleService } from 'src/services/article.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article:Article=new Article();
  selectedFile:File= null;
  art;

  constructor(private articleService:ArticleService, private toastrService:ToastrService, private router:Router) { }

  ngOnInit() {
    /* this.articleService.article$.subscribe((data)=>{
      //this.article=data;
      //console.log(data);

    }) */
console.log(this.articleService.article$);
this.art=this.articleService.article$;
if(this.art){
this.article.id=this.art.id;
this.article.nom=this.art.nom
this.article.text=this.art.text;
//this.article.img=this.art.img;
}

  }
  save(){
    console.log(this.article);
    if(this.validate()){
      this.articleService.saveOrUpdate(this.article,this.selectedFile).subscribe(data=>{
        console.log(data);  
        this.toastrService.success("Opération avec succes");
        this.router.navigate([`/articles/`]);
      })
    }else{
      this.toastrService.error("veuillez remplire les champs");
    }
    
  }

  onSelectedFile(event){
    console.log(event);

    this.selectedFile= <File>event.target.files[0];
    this.article.img=this.selectedFile.name;
    console.log("image nom", this.selectedFile.name);
  }

  validate(){
    return this.article.img && this.article.nom && this.article.text;
  }
}
