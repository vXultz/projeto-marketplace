import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição detalhada do produto 1',
      price: 100,
      image: 'https://via.placeholder.com/150',
      images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/200'],
      comments: ['Ótimo produto!', 'Muito satisfeito com a compra.']
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição detalhada do produto 2',
      price: 200,
      image: 'https://via.placeholder.com/150',
      images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/200'],
      comments: ['Excelente qualidade.', 'Recomendo a todos!']
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

  searchProducts(searchTerm: string) {
    if (!searchTerm) {
      return [];
    }

    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}