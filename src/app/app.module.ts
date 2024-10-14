import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
import { SliceTextPipe } from './Pipes/slice-text.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { HeaderInterceptor } from './Interceptor/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,

    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliceTextPipe,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
