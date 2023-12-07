import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListProductComponent,
    ProductComponent,
    PageNotFoundComponent,
    ProduitDetailComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
