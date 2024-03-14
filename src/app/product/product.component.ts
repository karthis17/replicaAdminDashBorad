import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private product: ProductService) { }


  data = {

    title: '',
    description: '',
    price: 0,
    discount: 0,
    category: '',
    thumbnail: '',

    images: [""],

    additionalInfo: [{
      title: '',
      description: ''
    }],
    quantity: 1,

    availableSize: [{
      width: 0,
      height: 1
    }],

    availablePrintType: [""]
  }



  addThub(e: any) {
    console.log(e);
    this.data.thumbnail = e.target.files[0];
  }

  addImage(e: any, i: any) {
    console.log(e);
    this.data.images[i] = e.target.files[0];
  }


  trackByFn(index: any, item: any) {
    return index;
  }



  submit() {

    console.log(this.data)
    this.product.addProduct(this.data).subscribe(data => console.log(data));
  }

}
