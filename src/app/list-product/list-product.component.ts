import { Component, Input, OnInit } from '@angular/core';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { IProduct } from '../product/Iproduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private datasharingservice:DataSharingServiceService) { }
  AllProducts:IProduct[]= this.datasharingservice.products;
  displayedColumns = ['ID', 'NAME', 'MANUFACTURER', 'DESCRIPTION', 'SHORTCODE','CATEGORY','SELLINGPRICE' ];
  ngOnInit(): void {
  }

}
