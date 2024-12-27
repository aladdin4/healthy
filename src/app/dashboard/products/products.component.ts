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
import { ToastrDisplayService } from '../../core/services/toastr.service';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/models/user';

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
    private toasterDisplayService: ToastrDisplayService  ,
    private title: Title,
    private usersService: UsersService
  ) { }
  productsSubscription: Subscription = new Subscription();
  usersSubscription: Subscription = new Subscription();
  user: User = new User();

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
    this.getUser();
   

    this.title.setTitle('Healthy Products');
  }
  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  addToMeal(product: Product) {
    this.toasterDisplayService.showSuccess('Product Added To Meal Successfully')
  }
  addToCart(product: Product) {
    this.productsService.addToCart(product);
    this.toasterDisplayService.showSuccess('Product Added To Cart Successfully')
  }
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }


  getUser() {
    this.usersService.getCurrentUser();
    let userLocalStorage = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || "") : new User();
    this.user = userLocalStorage;
    if (!this.user.id) {
      this.usersSubscription = this.usersService.currentUserSubject.subscribe((user) => {
        this.user = user;
      });
    }
  }
}

