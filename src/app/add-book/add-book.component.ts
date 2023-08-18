import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { BookService } from '../service/book.service';
import { IBook } from '../model/ibook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  constructor(
    private _bookService: BookService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  addBookForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  // addBookForm = new FormGroup({
  //   title: new FormControl('', [Validators.required]),
  //   author: new FormControl('', Validators.required),
  //   bookImage: new FormControl('image-2.png', Validators.required),
  //   category: new FormControl('', Validators.required),
  //   description: new FormControl('', Validators.required),
  // });

  private initForm() {
    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      bookImage: ['image-2.png', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  bookFormSubmit() {
    let bookObject: IBook = this.addBookForm.value;
    this._bookService.addBook(bookObject).subscribe((status) => {
      this._bookService.getAllBooks();
      if(status === 201){
        this.route.navigate(['/'])
      }
    });

    console.log(this.addBookForm.value);
  }
}
