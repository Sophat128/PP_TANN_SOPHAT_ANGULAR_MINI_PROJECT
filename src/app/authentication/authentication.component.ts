import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private _authService: AuthService, private route: Router){}

  bookForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });


  onBookFormSubmit(){
    if(this.bookForm.valid){
      this._authService.setIsLoggedIn(true)
      this.route.navigate(['/']);
    }
    console.log(this.bookForm.valid);
    
  }

}
