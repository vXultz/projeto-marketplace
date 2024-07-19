import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <app-banner></app-banner>
    <div class="product-sections">
      <app-products sectionTitle="Mais vendidos da semana"></app-products>
      <app-products sectionTitle="Ofertas do dia"></app-products>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }