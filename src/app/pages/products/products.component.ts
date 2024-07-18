import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.productService.getProductsByCategory(category).subscribe(data => {
          this.products = data;
        });
      } else {
        console.log('No category specified');
      }
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
