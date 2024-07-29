import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [CurrencyPipe]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  comments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private currencyPipe: CurrencyPipe,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.apiService.getProductDetails(+productId).subscribe(data => {
        this.product = data;
      });

      this.apiService.getProductComments(+productId).subscribe(data => {
        this.comments = data;
      });
    } else {
      alert('Produto não encontrado.');
      this.router.navigate(['/product-list']);
    }
  }

  getFormattedPrice(price: number) {
    return this.currencyPipe.transform(price, 'BRL', 'symbol', '1.2-2');
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }
}

