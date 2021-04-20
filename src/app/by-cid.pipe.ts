import { Pipe, PipeTransform } from '@angular/core';
import { Icategory } from './category/Icategory';

@Pipe({
  name: 'byCId'
})
export class ByCIdPipe implements PipeTransform {

  transform(value: Icategory[], args: number): Icategory[]{
    if(!args)
    {
      return value;
    }
    return value.filter(
      item=>item.CId===args
    );
  }

}
