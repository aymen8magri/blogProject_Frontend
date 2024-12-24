import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ArticleService } from '../../services/article.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  id: any;
  author: any;
  aticles: any;

  readonly authService: AuthService = inject(AuthService);

  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly articleService: ArticleService = inject(ArticleService);

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.authService.getAuthorById(this.id).subscribe((res: any) => {
      this.author = res;
      console.log(this.author);
    });

    this.articleService.getArticleByAuthor(this.id)
      .subscribe((res: any) => {
        this.aticles = res;
        console.log(this.id);
        console.log(this.aticles);
      },
        (error: any) => {
          console.log(error);
        }
      );
  }

}
