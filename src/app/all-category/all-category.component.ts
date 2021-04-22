import { Component, OnInit } from '@angular/core';
import { Icategory } from '../category/Icategory';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  constructor(private datasharingservice : DataSharingServiceService) {   }
   AllCategories:Icategory[]=this.datasharingservice.categories;
  ngOnInit(): void {
  }
  displayedColumns=['CID','CNAME','CDESCRIPTION','CSHORTCODE']
}
