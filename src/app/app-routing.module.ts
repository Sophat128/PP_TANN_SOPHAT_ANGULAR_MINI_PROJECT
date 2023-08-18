import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuard } from './auth/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'book', component: BookListComponent, canActivate:[authGuard]},
  {path: 'book/:id', component: ViewBookComponent},
  {path: 'addBook', component: AddBookComponent},
  {path: 'login', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
