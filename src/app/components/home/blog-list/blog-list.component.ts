import { Component, inject } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  articles: any;


  readonly articleService: ArticleService = inject(ArticleService);

  ngOnInit(): void {
    this.articleService.getAlArticle()
      .subscribe((data: any) => {
        this.articles = data;
      },
        (error: any) => {
          console.log(error);
        });
  }

}
