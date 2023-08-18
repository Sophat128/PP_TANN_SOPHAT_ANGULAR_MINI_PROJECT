import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../model/ibook';
import { BookService } from '../service/book.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  uniqueCategories = new Set<string>();
  categories: string[] = [];
  filteredBookList: IBook[] = [];
  selectedCategory: string | null = null; // Initially no category selected

  constructor(
    private _bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.books.forEach(book => this.uniqueCategories.add(book.category));
    // this.categories = Array.from(this.uniqueCategories);
  }
  books: IBook[] = [];
  searchCategory: string = '';


  

  ngOnInit(): void {
    this.getAllBooks();

    this.getCategory();

    // this.route.queryParams.subscribe(params => {
    //   const category = params['category'];
    //   if (category) {
    //     this.selectedCategory = category;
    //     this.filterBooksByCategory(category);
    //   }
    // });
    
  }


  filterBooksByCategory(category: string): void {
    this.selectedCategory = category;
    this._bookService.getAllBooks().subscribe({
      next: (books) => {
        this.filteredBookList = books.filter(
          
          (book) =>{

             book.category === category
            }
        );
        console.log(this.filteredBookList);
        
      },
    });
  }

  

  selectCategory(category: string): void {
    this.filterBooksByCategory(category)
    this.selectedCategory = category;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category },
      queryParamsHandling: 'merge',
    });
  }

  getCategory() {
    this._bookService.getAllBooks().subscribe({
      next: (books) => {
        books.forEach((book) => this.uniqueCategories.add(book.category));
        this.categories = Array.from(this.uniqueCategories);
      },
    });
  }

  getAllBooks() {
    return this._bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
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
}
