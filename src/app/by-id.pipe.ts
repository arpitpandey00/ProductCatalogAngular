import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Pipe({
  name: 'byId'
})
export class ByIdPipe implements PipeTransform {

  transform(value: IProduct[], args: number): IProduct[] {
    if(!args)
    {
    return value;
    }
    return value.filter(
      item=>item.Id===args
    );
  }

}
