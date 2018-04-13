import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(orders: any, term: any): any {
    //check if search term is undefined
    if(term === undefined) return orders;
    //return the updated orders array
    return orders.filter(function(order){
      return order.country.toLowerCase().includes(term.toLowerCase());
    })
  }

}

