import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const currentCartItems = this.cartItems.getValue();
    this.cartItems.next([...currentCartItems, product]);
  }

  getCartItems() {
    return this.cartItems$;
  }

  removeFromCart(productId: number) {
    const currentCartItems = this.cartItems.getValue();
    const updatedCartItems = currentCartItems.filter(item => item.id !== productId);
    this.cartItems.next(updatedCartItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }
  getCartItemCount(): number {
    return this.cartItems.getValue().length;  // returns the number of items in the cart
  }
}
