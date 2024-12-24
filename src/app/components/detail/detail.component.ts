import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  readonly articleService: ArticleService = inject(ArticleService);
  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly authService: AuthService = inject(AuthService);


  id: any;
  article: any;
  author: any;
  idAuthor: any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe(data => {
      this.article = data;
    }, (err) => { console.log(err) });;

    this.idAuthor = this.authService.getToken()._id;
    this.authService.getAuthorById(this.idAuthor).subscribe(data => {
      console.log(data);
      this.author = data;
    }, (err) => { console.log(err) });;
  }
}
