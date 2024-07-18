import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private totalQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantity$: Observable<number> = this.totalQuantitySubject.asObservable();

  constructor() { }

  addToCart(product: any): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product: product, quantity: 1 });
    }
    this.updateTotalQuantity();
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.product.id === item.product.id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      this.updateTotalQuantity();
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  updateTotalQuantity(): void {
    const totalQuantity = this.getTotalQuantity();
    this.totalQuantitySubject.next(totalQuantity);
  }

  checkout(): void {
    // Simulate checkout process (clear cart items)
    this.cartItems = [];
    this.updateTotalQuantity();
  }
}
