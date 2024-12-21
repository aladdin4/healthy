import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, interval, take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../core/services/products.service';
import { Product, ProductCategory } from '../../core/models/product';
import { MainService } from '../../core/services/main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor (public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private productsService: ProductsService,
    private mainService: MainService,
    private title: Title,
  ) { }
  productsSubscription: Subscription = new Subscription();
  products: ProductCategory[] = [];
  categories: string[] = [];
  activeCategory: string = '';
  ngOnInit(): void {

    this.mainService.setNavbarVisible(false);

    this.productsSubscription = this.productsService.productsSubject.subscribe((products) => {
      this.products = products;
      this.categories = products.map(product => product.category);
      this.activeCategory = this.categories[0];
    });
    this.productsService.getProducts();
    this.title.setTitle('Products');
  }
  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
