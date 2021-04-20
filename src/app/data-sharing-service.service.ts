import { Injectable } from '@angular/core';
import { IProduct } from './product/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {

  constructor() { }
  products:IProduct[]=[];
}
