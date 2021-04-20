import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private dataservices : DataSharingServiceService) { }

  idserach() {
    this.showid = true;
    this.showname = false;
    this.showshortcode = false;
    this.name = "this is id search";

  }
  namesearch() {
    this.showid = false;
    this.showname = true;
    this.showshortcode = false;
    this.name = "Name search"
  }
  shortcodesearch() {
    this.showid = false;
    this.showname = false;
    this.showshortcode = true;
    this.name = "Shortcode search";
  }

  ngOnInit(): void {


  }

  name = "ID";
  selected = '';
  showid = false;
  showname = false;
  showshortcode = false;

  id:number

  DeleteControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  DeleteById: FormGroup = new FormGroup({
    Id: new FormControl(null, [Validators.required])
  });

  DeleteByName: FormGroup = new FormGroup({
    Name: new FormControl(null, [Validators.required])
  });

  DeleteByShortCode: FormGroup = new FormGroup({
    ShortCode: new FormControl(null, [Validators.required])
  });

  DeleteOperations: string[] = ["Delete By Id", "Delete By Name", "Delete By Short Code",];
  DeleteByProdName(): void {
    this.dataservices.RemoveByName(this.DeleteByName.get('Name').value);
  }
  DeleteByProdId():void{
    this.dataservices.RemoveById(this.DeleteById.get('Id').value);
  }
  DeleteByProdShortCode():void{
    this.dataservices.RemoveByShortCode(this.DeleteByShortCode.get('ShortCode').value);
  }


}


