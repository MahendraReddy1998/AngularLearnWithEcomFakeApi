import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(Number(productId)).subscribe(
        data => {
          this.product = data;
        },
        error => {
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.error('Product ID is null');
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
