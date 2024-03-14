import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http: HttpClient) { }

  _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


  addProduct(data: any) {

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("discount", data.discount);
    formData.append("description", data.description);
    formData.append("additionalInfo", JSON.stringify(data.additionalInfo));
    formData.append("availablePrintSize", JSON.stringify(data.availableSize));

    data.availablePrintType.forEach((d: any) => {

      formData.append("availablePrintType", d);
    })
    formData.append("quantity", data.quantity);
    formData.append("thumbnail", data.thumbnail);

    data.images.forEach((element: any) => {
      formData.append("images", element);
    });

    const token: string | null = localStorage.getItem('token');
    let _options = { headers: new HttpHeaders({ 'Authorization': `Bearer ${token ? JSON.parse(token).token : ""}` }) };


    return this.http.post("http://localhost:3000/api/products/add-product", formData, _options)


  }

}
