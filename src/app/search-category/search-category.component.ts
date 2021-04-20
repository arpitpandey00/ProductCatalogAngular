import { Component, OnInit } from '@angular/core';
import { Icategory } from '../category/Icategory';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  constructor(private datasharingservice:DataSharingServiceService) { }
  AllCategoriesSearch:Icategory[]= this.datasharingservice.categories;
  ngOnInit(): void {
  }
  cid:number;
  cname:string;

}
