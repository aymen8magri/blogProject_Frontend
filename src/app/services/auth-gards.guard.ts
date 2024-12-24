import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGardsGuard: CanActivateFn = (route, state) => {
  const router:Router = inject(Router);
  const authService:AuthService = inject(AuthService);

  if(authService.isLogged()){
    return true;
  }else{  
    router.navigate(['/login']);
    return false;
  }
};
