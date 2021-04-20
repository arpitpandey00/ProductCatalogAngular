import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingServiceService } from '../data-sharing-service.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

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

  DeleteByCId: FormGroup = new FormGroup({
    CId: new FormControl(null, [Validators.required])
  });

  DeleteByCName: FormGroup = new FormGroup({
    CName: new FormControl(null, [Validators.required])
  });

  DeleteByCShortCode: FormGroup = new FormGroup({
    CShortCode: new FormControl(null, [Validators.required])
  });

  DeleteOperations: string[] = ["Delete By Id", "Delete By Name", "Delete By Short Code",];
  DeleteByCateName(): void {
    this.dataservices.RemoveByCategoryName(this.DeleteByCName.get('CName').value);
  }
  DeleteByCateId():void{
    this.dataservices.RemoveByCategoryId(this.DeleteByCId.get('CId').value);
  }
  DeleteByCateShortCode():void{
    this.dataservices.RemoveByCategoryShortCode(this.DeleteByCShortCode.get('CShortCode').value);
  }


}
