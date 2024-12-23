import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly authService: AuthService = inject(AuthService);

  isLogged(){
    return this.authService.isLogged();
  }

  getToken(){
    return this.authService.getToken();
  }
}