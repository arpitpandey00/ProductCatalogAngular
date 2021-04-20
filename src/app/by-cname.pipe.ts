import { Pipe, PipeTransform } from '@angular/core';
import { Icategory } from './category/Icategory';

@Pipe({
  name: 'byCName'
})
export class ByCNamePipe implements PipeTransform {

  transform(value: Icategory[], args: string): Icategory[]{
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.CName===args
    );
  }
}
