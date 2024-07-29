import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['search'] || '';
      this.products = this.productService.searchProducts(this.searchTerm);

      if (this.products.length === 0) {
        alert('Nenhum produto encontrado para o termo pesquisado. Por favor, tente novamente.');
      }
    });
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/product-details', product.id]);
  }
}