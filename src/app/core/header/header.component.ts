import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.firebaseAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
