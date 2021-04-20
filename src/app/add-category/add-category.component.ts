import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private datasharingservice : DataSharingServiceService) { }
  EnterCategoryForm :FormGroup
  updatecategory(){
    console.log(this.EnterCategoryForm.value);
    this.datasharingservice.updatecategories(this.EnterCategoryForm.value);
    this.EnterCategoryForm.reset();
  }

  ngOnInit(): void {
    this.EnterCategoryForm= new FormGroup({
      CId: new FormControl(null,[Validators.required]),
      CName: new FormControl(null,[Validators.required]),
      CDescription: new FormControl(null,[Validators.required]),
      CShortCode: new FormControl(null,[Validators.required])
  })
  
}
reset():void{
  this.EnterCategoryForm.reset();
}
}
