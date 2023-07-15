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

  constructor(private userService: UserService) { }

  async onLogin(form: NgForm){
    const { email, password } = form.value;
    try {
      await this.userService.login(email, password);
    } catch (error: any) {
      const errorMessages = [
        'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).',
        'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).',
        'Firebase: Error (auth/wrong-password).'
      ];

      if (errorMessages.includes(error.message)) {
        this.errorMessage = 'Email or password is incorrect!';
      }
    }
  }
}
