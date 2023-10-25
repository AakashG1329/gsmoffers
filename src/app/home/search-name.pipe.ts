import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((value: any) => {
      return (value.product_name.toLocaleLowerCase().includes(args)) || (value.product_price.includes(args));
    })

  }
}