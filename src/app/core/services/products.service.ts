import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { groupBy, map, mergeMap, reduce, BehaviorSubject, concatAll } from 'rxjs';
import { Router } from "@angular/router";
import { Product, ProductCategory, getDummyProducts } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor (
    private http: HttpClient,
    private router: Router,
  ) { }

  productsSubject = new BehaviorSubject<ProductCategory[]>([]);
  cartSubject = new BehaviorSubject<Product[]>([]);

  getCartItems() {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartSubject.next(JSON.parse(cartItems));
    }
  }

  addToCart(product: Product) {
    const existingItem = this.cartSubject.getValue().find(p => p.product_code === product.product_code);
    if (existingItem?.quantity) {
      existingItem.quantity += 1;
      this.cartSubject.next(this.cartSubject.getValue());
    }
    else {
      product.quantity = 1;
      this.cartSubject.next([...this.cartSubject.getValue(), product]);
    }
    this.saveCartToLocalStorage();
    console.log(this.cartSubject.getValue())
  }
  
  removeFromCart(product: Product) {
    const cartItems = this.cartSubject.getValue();
    const itemIndex = cartItems.findIndex(p => p.product_code === product.product_code);
    if (itemIndex !== -1) {
      const item = cartItems[itemIndex];
      if (item.quantity && item.quantity > 1)
      {
        item.quantity -= 1;
      } else {
        cartItems.splice(itemIndex, 1);
      }
      this.cartSubject.next(cartItems);
      this.saveCartToLocalStorage();
    }
  }
  saveCartToLocalStorage() {
    const cartItems = this.cartSubject.getValue();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  getProducts() {
    console.log('called?')
    //this.http
    //  .get<Product[]>(environment.serviceBase + '/api/Products')
    //  .subscribe((data) => this.productsSubject.next(data));
    this.productsSubject.next(getDummyProducts())
  }
}
