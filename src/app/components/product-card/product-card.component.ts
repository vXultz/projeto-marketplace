import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [CurrencyPipe]
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private currencyPipe: CurrencyPipe) { }

  getFormattedPrice(price: number) {
    return this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2');
  }
}