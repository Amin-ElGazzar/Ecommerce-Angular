import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, PaymentInfoComponent],
  imports: [CommonModule, CartRoutingModule, ReactiveFormsModule],
})
export class CartModule { }
