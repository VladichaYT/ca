import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  async login(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate([''])
    })
  }

  async register(email: string, password: string, repeatPassword: string) {
    if(password != repeatPassword) {
      //TODO:
      // show password missmatch pop up or some error box
    }
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=> {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate([''])
    })
  }

  logout() {
    this.firebaseAuth.signOut()
    this.isLoggedIn = false
    localStorage.removeItem('user')
  }
  
}
