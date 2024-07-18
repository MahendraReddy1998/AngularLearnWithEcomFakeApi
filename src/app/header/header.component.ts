// header.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: string = '';
  totalQuantity: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.cartService.totalQuantity$.subscribe(() => {
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }
}
