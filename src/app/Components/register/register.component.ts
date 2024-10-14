import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  backendError: string = '';
  constructor(private _authService: AuthService, private _router: Router) {
    if (localStorage.getItem('userToken') != null) {
      _router.navigate(['/home']);
    }
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(14),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern('01[0125][0-9]{8}'),
    ]),
  }, { validators: this.rePasswordMatch });

  rePasswordMatch(registerForm: any) {
    let passwordControl = registerForm.get('password')
    let rePasswordControl = registerForm.get('rePassword')
    if (passwordControl?.value === rePasswordControl?.value) {
      return null
    } else {
      rePasswordControl?.setErrors({ passwordMatch: 'password and rePassword not matched' })
      return { passwordMatch: 'password and rePassword not matched' }
    }
  }
  handleRegister(registerForm: FormGroup) {
    console.log('res');

    this.isLoading = true;
    if (registerForm.valid) {
      this._authService.register(registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.message === 'success') {
            this._router.navigate(['login']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.backendError = err.error.message;
          console.log(err);
        },
      });
    }
  }
}
