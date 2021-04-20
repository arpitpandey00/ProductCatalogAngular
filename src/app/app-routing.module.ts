import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { CategoryComponent } from './category/category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
  {
    path : "Product",
    component : ProductComponent,
    children: [
      {
        
          path : "AddProduct",
          component : AddProductComponent
          
        
      },
      {
        path : "SearchProduct",
        component : SearchProductComponent
      },
      {
        path : "DeleteProduct",
        component : DeleteProductComponent
      },
      {
        path : "AllProducts",
        component : ListProductComponent
      }
     
    ]
},
{
  path : "Category",
  component : CategoryComponent,
  children: [
    {
      
        path : "AddCategory",
        component : AddCategoryComponent
        
      
    },
    {
      path : "SearchCategory",
      component : SearchCategoryComponent
    },
    {
      path : "DeleteCategory",
      component : DeleteCategoryComponent
    },
    {
      path : "Allcategory",
      component : AllCategoryComponent
    }
   
  ]
  
},
{
  path : "Home",
  component : HomeComponent
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
