import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from "../models/user";
import { Router } from "@angular/router";
import { ToastrDisplayService } from "./toastr.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (
    private router: Router,
    private toasterDisplayService: ToastrDisplayService,
  ) {
     
  }

  currentUserSubject = new BehaviorSubject<User>(new Object as User);
  usersSubject = new BehaviorSubject<User[]>([]);

  logIn(email: string, password: string) {
    let user = this.dummyUserList.find(user => user.email == email) || new User();

   
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
                 console.log('called')
    if (!user.id) {
      this.toasterDisplayService.showError({ error: "User Not Found" });
    }
    else {
      //reroute to home
      this.router.navigate(['/products']);
    }
  }
  logOut() {
    this.currentUserSubject.next(new User());
    localStorage.removeItem('currentUser');
  }
  getCurrentUser() {
    let userLocalStorage = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || "") : new User();
    this.currentUserSubject.next(userLocalStorage);

    console.log('userLocalStorage', userLocalStorage)
  }                     

  dummyUserList: User[] = [
    new User("ahmed@healthy.com", "admin", "Ahmed", "Aladdin", 1, "23th Main Street, London"),
    new User("mohammed@gmail.com", "user", "Mohammed", "Ibrahim", 2, "23th Main Street, London"),
    new User("saber@gmail.com", "user", "Saber", "Osman", 3, "23th Main Street, London"),
  ]

  getUsers() {
    this.usersSubject.next(this.dummyUserList);
  }

}
