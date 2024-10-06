import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
})
export class PaymentInfoComponent {
  constructor(private _cartService: CartService) { }

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  });

  goToPayment(shippingAddress: FormGroup) {
    console.log(shippingAddress.value);

    let myRoot = window.location.origin;
    this._cartService.onlinePayment(shippingAddress.value, myRoot, "67026e3e475ce789cdb60f40").subscribe(
      {
        next: (response: any) => {
          console.log(response.session.url)
          window.location.href = response.session.url;
        },
        error: (err) => console.log(err),
      }
    )
  }
}
