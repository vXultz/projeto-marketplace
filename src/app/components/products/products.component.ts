import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() sectionTitle: string = '';
  products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, image: 'https://via.placeholder.com/150' },
  ];

  constructor(private router: Router, private currencyPipe: CurrencyPipe) { }

  viewProductDetails(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }

  getFormattedPrice(price: number) {
    return this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2');
  }
}
