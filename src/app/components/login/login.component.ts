import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  author = {
    email: '',
    password: ''
  }

  readonly authService: AuthService = inject(AuthService);
  readonly router: Router = inject(Router);

  token: any;
  login() {
    this.authService.login(this.author)
      .subscribe(
        (res: any) => {
          this.token = res;
          localStorage.setItem('token', this.token.mytoken);
          this.router.navigate(['/home']);
          console.log(res);
          console.log(this.token);
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
