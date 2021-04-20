import { Injectable } from '@angular/core';
import { Icategory } from './category/Icategory';
import { IProduct } from './product/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {
  constructor() {}
  products:IProduct[]=[
    {
      Id:1,
      Name:"Pen",
      Manufacturer:"Natraj",
      Description:"Study Material",
      SellingPrice:12,
      ShortCode:"pn12",
      Category:"Stationary"
    },
    {
      Id:2,
      Name:"Hanger",
      Manufacturer:"Maya",
      Description:"For Clothes",
      SellingPrice:30,
      ShortCode:"hg30",
      Category:"Grocery"
    },
    {
      Id:3,
      Name:"Mobile",
      Manufacturer:"Oneplus",
      Description:"Essintail item",
      SellingPrice:30000,
      ShortCode:"op30",
      Category:"Technology"
    },
    {
      Id:4,
      Name:"Smart Watch",
      Manufacturer:"Mi",
      Description:"Health Measuring",
      SellingPrice:10000,
      ShortCode:"mi10",
      Category:"Technology"
    },
    {
      Id:5,
      Name:"Pencil",
      Manufacturer:"Apsara",
      Description:"Study Material",
      SellingPrice:7,
      ShortCode:"pn07",
      Category:"Stationary"
    },
  ];
  categories:Icategory[]=[
    {
    CId :1,
    CName:"Technology",
    CDescription: "Gadgets",
    CShortCode:"Tech"
  },
  {
    CId :2,
    CName:"Grocery",
    CDescription: "Household Items",
    CShortCode:"Groc"
  },
  {
    CId :3,
    CName:"Toys",
    CDescription: "For Kids",
    CShortCode:"tykd"
  },
  {
    CId :4,
    CName:"Stationary",
    CDescription: "Study",
    CShortCode:"stud"
  },
  ]
  updateproducts(p:IProduct){
  this.products.push(p);  
  }
  updatecategories(c:Icategory){
    this.categories.push(c);  
    }
}
