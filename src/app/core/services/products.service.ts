import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { groupBy, map, mergeMap, reduce, BehaviorSubject, concatAll } from 'rxjs';
import { Router } from "@angular/router";
import { Product, ProductCategory, getDummyProducts } from "../models/product";
import { environment } from "../../../environments/environment";

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
    this.http
      .get < { data: ProductCategory[]} >(environment.serviceBase + 'category?page=1')
      .subscribe((data) => {
        console.log(data)
        console.log(getDummyProducts())
        let productCategories = data.data;
        productCategories.forEach(category => {
          category.items.forEach(product => {
            product.category = category.category;
            product.img_url = "../../../assets/Creamy_Broccoli_Vegan_Pasta.jpg";
            
          });
        });
        this.productsSubject.next(productCategories)
      });
    //this.productsSubject.next(getDummyProducts())
  }
}
