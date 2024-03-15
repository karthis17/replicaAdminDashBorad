import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatSelectModule, MatInputModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private category: CategoryService) { }


  data = {
    categoryName: '',
    description: '',
    thumbnail: ''
  }

  addThub(e: any) {
    this.data.thumbnail = e.target.files[0];
  }

  submit() {
    console.log(this.data)

    this.category.addProduct(this.data).subscribe(data => {
      console.log(data);
      this.data = {
        categoryName: '',
        description: '',
        thumbnail: ''
      }
    })
  }

}
