import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);

  let isLoggedIn = authService.isAuthenticated();
  if (isLoggedIn){
    return true
  } else {
    router.navigate(['']);
    
  }
  return true;
};
