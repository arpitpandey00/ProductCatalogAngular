import { Component, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { IProduct } from '../product/Iproduct';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private datasharingservice:DataSharingServiceService) { }
  AllProductsSearch:IProduct[]= this.datasharingservice.products;
  ngOnInit(): void {
  }
  displayedColumns = ['ID', 'NAME', 'MANUFACTURER', 'DESCRIPTION', 'SHORTCODE','CATEGORY','SELLINGPRICE' ];
  
  id:number;
  name:string;
  pricegreaterthan:number;
  pricelessthan :number;
  priceequalto :number;
}
