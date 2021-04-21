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
  
  checkingCatogiry:boolean=false;
  updateproducts(p:IProduct){
  this.categories.forEach(cata => {
   if( cata.CName!==p.Category)
   {
     this.checkingCatogiry=true;
   }

  });
  if(this.checkingCatogiry===true)
  {
    this.products.push(p);
    alert("This category is not avaliable please add this category after OK.");
  }
  else{

    this.products.push(p);  
  }
  }
  updatecategories(c:Icategory){
    this.categories.push(c);  
    }
  RemoveById(cid:number)
  {
    console.log(cid);
    this.products.forEach((value,index)=>{
      if(value.Id == cid) this.products.splice(index,1);
    });
  }
  RemoveByName(cname:string)
  {
    console.log(cname);
    this.products.forEach((value,index)=>{
      if(value.Name == cname) this.products.splice(index,1);
    });
  }
  RemoveByShortCode(cshortcode:string)
  {
    console.log(cshortcode);
    this.products.forEach((value,index)=>{
      if(value.ShortCode == cshortcode) this.products.splice(index,1);
    });
  }
  RemoveByCategoryId(cid:number)
  {
    console.log(cid);
    this.categories.forEach((value,index)=>{
      if(value.CId == cid) this.categories.splice(index,1);
    });
  }
  RemoveByCategoryName(cname:string)
  {
    console.log(cname);
    this.categories.forEach((value,index)=>{
      if(value.CName == cname) this.categories.splice(index,1);
    });
  }
  RemoveByCategoryShortCode(cshortcode:string)
  {
    console.log(cshortcode);
    this.categories.forEach((value,index)=>{
      if(value.CShortCode == cshortcode) this.categories.splice(index,1);
    });
  }
  RemoveProductByCategoryName(cname:string)
  {
    console.log(cname);
    this.products.forEach((value,index)=>{
      if(value.Category == cname) this.products.splice(index,1);
    });
  }
  RemoveProductByCategoryId(cid:number)
  {
    console.log(cid);
    this.products.forEach((value,index)=>{
      if(value.Id == cid) this.products.splice(index,1);
    });
  }
  RemoveProductByCategoryShortCode(cshortcode:string)
  {
    console.log(cshortcode);
    
    this.products.forEach((value,index)=>{
      console.log("1");
      if(value.ShortCode == cshortcode) this.products.splice(index,1);
    });
  }
  
  
}
