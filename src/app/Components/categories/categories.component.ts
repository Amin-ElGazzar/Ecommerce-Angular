import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  constructor(private _categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this._categoriesService.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true, // Enables autoplay
    autoplayTimeout: 3000, // Sets the delay between slides (3000ms = 3 seconds)
    autoplayHoverPause: true, 
    margin: 15,// Pauses autoplay on hover
    responsive: {
      0: {
        items: 7,
      },
    },
    nav: true,
  };
}
