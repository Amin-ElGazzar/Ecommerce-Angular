import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'carts', pathMatch: 'full' },
  { path: 'carts', component: CartComponent },
  { path: 'paymentInfo', component: PaymentInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
