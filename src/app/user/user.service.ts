import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false

  constructor(public firebaseAuth: AngularFireAuth) { }

  async register(email: string, password: string, repeatPassword: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }
}
