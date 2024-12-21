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

  getProducts() {
    console.log('called?')
    //this.http
    //  .get<Product[]>(environment.serviceBase + '/api/Products')
    //  .subscribe((data) => this.productsSubject.next(data));
    this.productsSubject.next(getDummyProducts())
  }
}
