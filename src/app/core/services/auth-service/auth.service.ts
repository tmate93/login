import { Injectable } from '@angular/core';
import { User } from "../../models/user/user.model";
import { Router } from "@angular/router";

const localStorageName = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  register (user: User): void {

    if (!user.firstName || !user.lastName || !user.password || !user.email) {
      return;
    }

    this.addUser(user);
    this.router.navigate(['../../public/login']);
  }

  private addUser (user: User): void {
    let users = [];
    if (localStorage.getItem(localStorageName)) {
      users = JSON.parse(<string>localStorage.getItem(localStorageName));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem(localStorageName, JSON.stringify(users));
  }
}
