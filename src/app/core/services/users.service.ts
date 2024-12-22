import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from "../models/user";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (private router: Router
  ) {
     
  }

  currentUserSubject = new BehaviorSubject<User>(new Object as User);
  usersListSubject = new BehaviorSubject<User[]>([]);

  logIn(email: string, password: string) {
    console.log('here')
    let user = this.dummyUserList.find(user => user.email == email) || new User();
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    //reroute to home
    this.router.navigate(['/products']);
  }

  getCurrentUser() {
    let userLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || "") : new User();
    this.currentUserSubject.next(userLocalStorage);
  }                     

  dummyUserList: User[] = [
    new User("ahmed@healthy.com", "admin", "Ahmed", "Aladdin", 1),
    new User("mohammed@gmail.com", "user", "Mohammed", "Ibrahim", 2),
    new User("saber@gmail.com", "user", "Saber", "Osman", 3),
  ]

  getUsersList() {
    this.usersListSubject.next(this.dummyUserList);
  }

}
