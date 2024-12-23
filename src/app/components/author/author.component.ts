import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  id: any;
  author: any;

  readonly authService: AuthService = inject(AuthService);

  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];

    this.authService.getAuthorById(this.id).subscribe((res: any) => {
      this.author = res;
      console.log(this.author);
    });
  }

}
