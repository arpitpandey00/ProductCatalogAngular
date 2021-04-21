import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DataSharingServiceService } from '../data-sharing-service.service';

function PriceRangeValidator(min: number, max: number):ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 1 || control.value > 100000)) {
      return { "priceerror": true };
    }
    return null;
  }
}
// function ShortCodeValidator():ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//     if (control.value !== undefined && (isNaN(control.value)  )) {
//       return { "Shortcodeerror": true };
//     }
//     return null;
//   }
// }
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private datasharingservice: DataSharingServiceService) { }

  EnterProductForm: FormGroup;
  updateproduct() {
    console.log(this.EnterProductForm.value);
    this.datasharingservice.updateproducts(this.EnterProductForm.value);
    this.EnterProductForm.reset();
  }
  min: number = 1;
  max: number = 100000;

  ngOnInit(): void {
    this.EnterProductForm = new FormGroup({
      Id: new FormControl(null, [Validators.required]),
      Name: new FormControl(null, [Validators.required]),
      Manufacturer: new FormControl(null, [Validators.required]),
      Description: new FormControl(null, [Validators.required]),
      SellingPrice: new FormControl(null, [Validators.required, PriceRangeValidator(this.min, this.max)]),
      Category: new FormControl(null, [Validators.required]),
      ShortCode: new FormControl(null, [Validators.required,Validators.maxLength(4)]),
    })
  }
  reset(): void {
    this.EnterProductForm.reset();
  }

}

