import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

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
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((par) => {
      this.productId = par.get('id');
    });
    this._productService.getProductDetails(this.productId).subscribe({
      next: (res) => {
       
        
        this.productDetails = res.data;
      },
    });
  }
}
