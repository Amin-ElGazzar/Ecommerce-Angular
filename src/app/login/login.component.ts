import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._authService.login(loginForm).subscribe({
        next: (res) => {
          this.isLoading = false;
          localStorage.setItem('userToken', res.token);
          this._authService.decodedToken();
          this._router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoading = false;
        },
      });
    }
  }
}
