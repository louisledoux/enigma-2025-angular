import { Component, HostBinding, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductComponent } from './components/product/product';
import { mockedProduct, mockedProduct2, mockedProduct3 } from './data/mockedProduct';
import { Product } from './models/product.interface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductComponent, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private apiService = inject(ApiService);
  products = this.apiService.products;

  constructor() {
    this.apiService.fetchProducts().subscribe();
  }

  displayProductInConsole(product: Product) {
    console.log('Product added to cart', product);
  }
}
