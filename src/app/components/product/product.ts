import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.interface';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, DecimalPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  product = input.required<Product>();

  addToCartOutput = output<Product>();
}
