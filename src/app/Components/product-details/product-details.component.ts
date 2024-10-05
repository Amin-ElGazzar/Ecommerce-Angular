import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productDetails: any;
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _cartService:CartService
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((par) => {
      this.productId = par.get('id');
    });
    this._productService.getProductDetails(this.productId).subscribe({
      next: (res) => {
        console.log(res.data);
        
        this.productDetails = res.data;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  addToCart(productId:string){
    return this._cartService.addToCart(productId).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
