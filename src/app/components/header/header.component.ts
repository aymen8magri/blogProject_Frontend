import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly authService: AuthService = inject(AuthService);
  readonly router: Router = inject(Router);

  isLogged(){
    return this.authService.isLogged();
  }

  getToken(){
    return this.authService.getToken();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
