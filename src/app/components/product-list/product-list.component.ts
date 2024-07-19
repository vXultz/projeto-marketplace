import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Listagem de Produtos</h2>`,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { }
