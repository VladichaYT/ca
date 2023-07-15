import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: any;

  constructor(public userService: UserService) {}

  async onRegister(form: NgForm) {
    const { email, password, repeatPassword } = form.value
    try {
      await this.userService.register( email, password, repeatPassword)
    } catch (error: any) {
      const errorMessages = [
        'Firebase: The email address is already in use by another account. (auth/email-already-in-use).',
      ];

      if (errorMessages.includes(error.message)) {
        this.errorMessage = 'Email is already in use!';
      }
    }
    }
  }
