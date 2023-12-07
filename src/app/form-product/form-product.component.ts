import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
  productForm !: FormGroup
  ngOnInit(): void {
  this.productForm= new FormGroup({
    id:new FormControl('',Validators.required),
    title:new FormControl('', Validators.required),
    price:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    likes:new FormControl('',Validators.required)
  })}
  add(){
    console.log("notre form"+JSON.stringify(this.productForm.value))
  }
}
