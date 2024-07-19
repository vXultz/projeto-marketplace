import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Carrinho</h2>`,
  styleUrls: ['./cart.component.css']
})
export class CartComponent { }
