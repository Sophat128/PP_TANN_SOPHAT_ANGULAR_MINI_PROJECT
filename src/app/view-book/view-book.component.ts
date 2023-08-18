import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';
import { IBook } from '../model/ibook';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {

  bookId: number | undefined;
  title: string | undefined | null;
  tempBook!: IBook;

  constructor(private _bookService: BookService, private activeRout: ActivatedRoute){}

  ngOnInit(): void {
    this.getBookIdAndParamNameFromUrl();
  }
  get books(){
    return this._bookService.getAllBooks().subscribe({
      next: (books) => books
    });
  }

  // getBookIdAndParamNameFromUrl(){
  //  this.bookId = +this.activeRout.snapshot.paramMap.get('id')!;
  // //  this.title = this.activeRout.snapshot.queryParamMap.get('search');
  //  this._bookService.getAllBooks().subscribe({
  //   next: (books) => books.map(book => {
  //     console.log("Book ", book);
  //     if(book.id === this.bookId && book.title === this.title){
        
  //       this.tempBook = book;
  //     }
  //   })
  // });

  // }
  getBookIdAndParamNameFromUrl() {
    this.bookId = +this.activeRout.snapshot.paramMap.get('id')!;
    console.log("id: ", this.bookId);
    
    // this.title = this.activeRout.snapshot.queryParamMap.get('search');
    this._bookService.getAllBooks().subscribe({
      next: (books) => {
        console.log("books: ", books);
        
        this.tempBook = books.filter(book => book.id === this.bookId)[0];
        console.log("Book ", this.tempBook);
      }
    });
  }
  
}
