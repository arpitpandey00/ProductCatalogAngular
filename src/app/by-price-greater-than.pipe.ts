import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'byPriceGreaterThan'
})
export class ByPriceGreaterThanPipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.SellingPrice>args
    );
  }
}
