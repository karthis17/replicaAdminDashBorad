import { Component, Input } from '@angular/core';
import { PaymentService } from '../service/payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentWindowService } from '../service/payment-window.service';

export interface Product {
  name: string;
  amount: number;
  description: string;
}
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {


  @Input() product!: Product;
  imageUrl: string = 'https://dummyimage.com/600x400/000/fff';


  rzp1: any;

  constructor(private paymentService: PaymentService, private service: PaymentWindowService) { }

  submitForm() {
    this.paymentService.createOrder(this.product).subscribe(
      res => {
        if (res.success) {
          // Handle payment success
          console.log(res);
          let options = {
            "key": res.key_id,
            "amount": `${res.amount}`,
            "currency": "INR",
            "name": res.product_name,
            "description": res.description,
            "image": "https://dummyimage.com/600x400/000/fff",
            "order_id": res.order_id,
            "handler": function (response: any) {
              alert("Payment Succeeded");
              // window.open("/","_self")
            },
            "prefill": {
              "contact": res.contact,
              "name": res.name,
              "email": res.email
            },
            "notes": {
              "description": res.description
            },
            "theme": {
              "color": "#2300a3"
            }
          };


          this.service.initializeRazorpay(options);
          this.service.openPayment()


        } else {
          alert(res.msg);
        }
      },
      error => {
        console.error(error);
        alert('An error occurred');
      }
    );
  }









}
