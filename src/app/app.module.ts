import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailValidatorDirective } from './customDirective/email-validator.directive';
import { PasswordValidatorDirective } from './customDirective/password-validator.directive';
import { SearchCategoryPipe } from './customPipe/search-category.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LineTruncatePipe } from './customPipe/line-truncate.pipe';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './data/bookData';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAnimationsComponent } from './popup/dialog-animations/dialog-animations.component';
import { DialogAnimationsDialogComponent } from './popup/dialog-animations-dialog/dialog-animations-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    SearchCategoryPipe,
    HomePageComponent,
    BookListComponent,
    ViewBookComponent,
    AuthenticationComponent,
    LineTruncatePipe,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BookData),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
