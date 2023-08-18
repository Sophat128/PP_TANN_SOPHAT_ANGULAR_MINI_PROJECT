import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySearch'
})
export class SearchCategoryPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item =>
      item.toLowerCase().includes(searchText)
    );
  }

}
