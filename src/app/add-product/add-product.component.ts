import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  // EnterProductForm:FormGroup | any;


  ngOnInit(): void {
    // this.EnterProductForm= new FormGroup({
    //   Id: new FormControl(null,[Validators.required]),
    //   Name: new FormControl(null,[Validators.required]),
    //   Manufacturer: new FormControl(null,[Validators.required]),
    //   Description: new FormControl(null,[Validators.required]),
    //   SellingPrice: new FormControl(null,[Validators.required]),
    //   Category: new FormControl(null,[Validators.required]),
    //   ShortCode: new FormControl(null,[Validators.required]),
    // })
  }
  reset():void{
    //this.EnterProductForm.reset();
  }

}
