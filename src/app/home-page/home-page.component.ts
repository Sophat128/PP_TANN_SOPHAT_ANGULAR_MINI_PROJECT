import { Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { IBook } from '../model/ibook';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(
    private _bookService: BookService,
    private formBuilder: FormBuilder
  ) {}
  books: IBook[] = [];

  addBookForm!: FormGroup;

  private initForm() {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      bookImage: ['image-2.png', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.initForm();
  }
  getAllBooks() {
    return this._bookService.getAllBooks().subscribe({
      next: (books) => {
        console.log(books);

        this.books = books;
        // console.log('ss:', this.books)
      },
    });
  }
  deleteBookById(id: number) {
    return this._bookService.deleteBook(id).subscribe({
      next: () => {
        this.getAllBooks();
        // this.backToCreateArticle();
      },
    });
  }

  //Load article by id to edit
  loadArticleToEdit(bookId: number) {
    this._bookService.getBookById(bookId).subscribe({
      next: (book) => {
        this.addBookForm.setValue({
          title: book.title,
          author: book.author,
          bookImage: book.bookImage,
          category: book.category,
          description: book.description,
        });
      },
    });
  }
  onSubmitUpdate() {
    let updateArticle: IBook = this.addBookForm.value;
    this._bookService.updateBook(updateArticle);
  }
}
