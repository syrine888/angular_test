import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:ProductComponent},
 {path:'product',component:ListProductComponent},
// {path:'**',component:PageNotFoundComponent},
 {path:'product/detail/:id',component:ProduitDetailComponent},
 {path:'product/addProduct',component:FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
