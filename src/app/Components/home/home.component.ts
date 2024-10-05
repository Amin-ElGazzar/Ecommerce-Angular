import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/Interfaces/product-dto';
import { Products } from 'src/app/Interfaces/products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ProductDTO: ProductDTO[] = [];
  searchText: string = '';
  constructor(
    private _productsService: ProductsService,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this._productsService.getProduct().subscribe({
      next: (res) => {
        console.log(res);

        this.ProductDTO = res.data;
      },
    });
  }

  addToCart(productId: string) {
    return this._cartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
