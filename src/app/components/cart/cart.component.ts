import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CurrencyPipe]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  shippingCost: number = 20.00;

  constructor(
    private cartService: CartService,
    private currencyPipe: CurrencyPipe,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: any) {
    this.cartService.removeFromCart(item.id);
    this.cartItems = this.cartService.getCartItems(); // Atualiza a lista após remover
  }

  getTotalItemPrice(item: any) {
    return this.currencyPipe.transform(item.price * item.quantity, 'BRL', 'symbol', '1.2-2');
  }

  getTotalCartPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getFormattedTotalCartPrice() {
    return this.currencyPipe.transform(this.getTotalCartPrice(), 'BRL', 'symbol', '1.2-2');
  }

  getFormattedShippingCost() {
    return this.currencyPipe.transform(this.shippingCost, 'BRL', 'symbol', '1.2-2');
  }

  getFormattedTotalPurchasePrice() {
    return this.currencyPipe.transform(this.getTotalCartPrice() + this.shippingCost, 'BRL', 'symbol', '1.2-2');
  }

  startSearch() {
    this.router.navigate(['/']);
  }
}
