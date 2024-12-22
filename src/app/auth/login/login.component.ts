import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../core/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logInData: any;

  constructor (
    private fb: FormBuilder,
    public dialog: MatDialog,
    private cookieService: CookieService,
    private title: Title,
    private usersService: UsersService
                                    
  ) { }
  logoPath = "../assets/images/logo.png";
  loggingIn: boolean = false;
  loggingInSubscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.title.setTitle('Login');
  }

  ngOnDestroy(): void {
    this.loggingInSubscription.unsubscribe();
  }

  logInForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  logIn() {
    this.usersService.logIn(this.logInForm.value.email || "", this.logInForm.value.password || "");
  }
  
}
