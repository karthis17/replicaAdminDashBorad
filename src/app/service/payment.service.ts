import { Injectable } from '@angular/core';
import { Product } from '../payment/payment.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  createOrder(product: Product): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/payment/createOrder', product, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
