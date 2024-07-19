import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemCount = 0;

  constructor(private router: Router) { }

  searchProducts(searchTerm: string) {
    this.router.navigate(['/product-list', { search: searchTerm }]);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
