import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { mockedProduct } from './data/mockedProduct';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', () => {
    const mockedProducts = [mockedProduct];

    service.fetchProducts().subscribe((products) => {
      expect(products).toEqual(mockedProducts);
      expect(service.products()).toEqual(mockedProducts);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/products');
    expect(req.request.method).toBe('GET');
    req.flush({ data: mockedProducts });
  });
});
