import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { User } from "../models/user";
import { Router } from "@angular/router";
import { ToastrDisplayService } from "./toastr.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (
    private http: HttpClient,
    private router: Router,
    private toasterDisplayService: ToastrDisplayService,
  ) {
     
  }

  currentUserSubject = new BehaviorSubject<User>(new Object as User);
  usersSubject = new BehaviorSubject<User[]>([]);

  logIn(email: string, password: string) {
    this.http
      .post<{ data: User  }>(environment.serviceBase + 'login', { email, password })
      .subscribe((data) => {
                        let rawUser = data.data
        let user = new User(
          rawUser.email,
          rawUser.role,
          rawUser.first_name,
          rawUser.last_name,
          rawUser.id,
          rawUser.customer_address,
          rawUser.customer_prefrences,
          rawUser.customer_phone,
          rawUser.token,
        );

          console.log('raw user', rawUser)
        console.log('user', user)

        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        if (!user.role) {
          this.toasterDisplayService.showError({ error: "User Not Found" });
        }
        else {
          this.toasterDisplayService.showSuccess("Login successful");
         // reroute to home
          this.router.navigate(['/products']);
        }
      },
        err => {
          let errMsg = err.error.data.email[0];
          this.toasterDisplayService.showError({ error: errMsg });
        });

    //let user = this.dummyUserList.find(user => user.email == email) || new User();

   
    //
    //localStorage.setItem('currentUser', JSON.stringify(user));
    //             console.log('called')
    //if (!user.id) {
    //  this.toasterDisplayService.showError({ error: "User Not Found" });
    //}
    //else {
    //  //reroute to home
    //  this.router.navigate(['/products']);
    //}
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
    let currentUser  = JSON.parse(localStorage.getItem('currentUser') || "");
    let token = currentUser.token; 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    this.http
      .get<{ data: User[] }>(environment.serviceBase + 'users', { headers })
      .subscribe((response) => {
        console.log('data', response.data);
        response.data.forEach(user => {
          user.fullName = `${user.first_name} ${user.last_name}`;
        });
        this.usersSubject.next(response.data);
      })

    
  }

  createNewUser(user: any) {
    this.http
      .post<{ data: User }>(environment.serviceBase + 'users/create', {
        email: user.email,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName,
        role: user.role,
        customer_address: user.address,
        customer_phone  : user.phone

      })
      .subscribe((data) => {
        
        console.log('data', data)

        //this.currentUserSubject.next(user);
        //localStorage.setItem('currentUser', JSON.stringify(user));
        //console.log(user);
        //if (!user.role) {
        //  this.toasterDisplayService.showError({ error: "User Not Found" });
        //}
        //else {
        //  this.toasterDisplayService.showSuccess("Login successful");
        //  // reroute to home
        //  this.router.navigate(['/products']);
        //}
      },
        err => {
          let errMsg = err.error.data.email[0];
          this.toasterDisplayService.showError({ error: errMsg });
        });
  }
}
