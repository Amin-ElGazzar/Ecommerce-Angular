import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true, // Enables autoplay
    autoplayTimeout: 3000, // Sets the delay between slides (3000ms = 3 seconds)
    autoplayHoverPause: true, // Pauses autoplay on hover
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
