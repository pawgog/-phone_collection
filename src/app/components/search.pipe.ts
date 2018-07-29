import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items) {
        return [undefined];
    }
    if (!searchText) {
        return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
   }
}
