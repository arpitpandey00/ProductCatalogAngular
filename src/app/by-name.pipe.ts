import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'byName'
})
export class ByNamePipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.Name === args
    );
  }

}
