import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';


@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [FormsModule, AngularEditorModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {

  article: any = {
    title: '',
    content: '',
    tags: [],
    description: ''
  };

  readonly authService: AuthService = inject(AuthService);
  readonly articleSerice: ArticleService = inject(ArticleService);
  readonly router: Router = inject(Router);

  constructor() { }
  tag: any;
  addTag() {
    this.article.tags.push(this.tag);
    this.tag = '';
  }

  image: any;
  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  createArticle() {
    const formData = new FormData();
    formData.append('title', this.article.title);
    formData.append('content', this.article.content);
    formData.append('tags', this.article.tags.toString());
    formData.append('description', this.article.description);
    formData.append('image', this.image);
    formData.append('idAuthor', this.authService.getToken()._id);
    console.log(this.authService.getToken()._id);
    

    this.articleSerice.create(formData).subscribe(
      (res: any) => {
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}
