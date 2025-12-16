import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductComponent } from './components/product/product';
import { mockedProduct, mockedProduct2, mockedProduct3 } from './data/mockedProduct';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductComponent, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  product = mockedProduct;
  product2 = mockedProduct2;
  product3 = mockedProduct3;

  displayProductInConsole(product: Product) {
    console.log('Product added to cart', product);
  }
}
