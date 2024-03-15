import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private product: ProductService) { }


  data: any[] = [];


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.product.get().subscribe((data: any) => this.data = data.product)
  }


  displayedColumns: string[] = ['id', 'name', 'description', 'symbol'];

  delete(id: any) {
    console.log(id);
    this.product.delete(id).subscribe(data => { console.log(data) });
  }

  edit(id: any) {
    console.log(id);

  }

}
