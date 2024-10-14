import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  cartNumber: number = 0
  constructor(private _authService: AuthService, private _cartService: CartService) { }
  ngOnInit(): void {
    this._cartService.cartItemNumber.subscribe({
      next: (res) => {
        this.cartNumber = res
      }
    })
    this._authService.userData.subscribe({
      next: () => {
        if (this._authService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  LogOut() {
    this._authService.logOut();
  }
}
