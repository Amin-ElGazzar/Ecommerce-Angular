import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/categories/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './Gards/auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'about', canActivate: [authGuard], component: AboutComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  {
    path: 'productDetails/:id',
    canActivate: [authGuard],
    component: ProductDetailsComponent,
  },
  {
    path: 'categories',
    canActivate: [authGuard],
    component: CategoriesComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
