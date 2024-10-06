import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cardProducts: any ;
  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.getUserCart().subscribe({
      next: (res) => {
        console.log(res);

        this.cardProducts = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
