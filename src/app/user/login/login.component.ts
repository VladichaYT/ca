import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: any;
  isLoading: boolean = false

  constructor(private userService: UserService) { }

  async onLogin(form: NgForm) {
    const { email, password } = form.value;
    this.isLoading = true
    try {
      await this.userService.login(email, password);
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        this.isLoading = false
        this.errorMessage = 'Email or password is incorrect!';
      } else {
        this.isLoading = false
        this.errorMessage = 'An error occurred while logging in.';
      }
    }
  }
}
