import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  checkout(): void {
    this.cartService.checkout();
    this.router.navigate(['/order-success']);
  }
}
