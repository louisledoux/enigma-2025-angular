import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../api.service';
import { ProductComponent } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private apiService = inject(ApiService);
  products = this.apiService.products;

  constructor() {
    this.apiService.fetchProducts().subscribe();
  }
}
