import { Injectable } from '@angular/core';

function _window() {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentWindowService {

  private rzp: any;

  constructor() { }

  initializeRazorpay(options: any): void {
    if ((window as any)['Razorpay']) {
      this.rzp = new (window as any)['Razorpay'](options);
    } else {
      console.error('Razorpay not available.');
    }
  }

  openPayment(): void {
    if (this.rzp) {
      this.rzp.open();
    } else {
      console.error('Razorpay not initialized.');
    }
  }
}
