import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: any = ''
  isLoading: boolean = false

  constructor(public userService: UserService) {}

  async onRegister(form: NgForm) {
    const { email, password, rePass } = form.value
    this.isLoading = true
    
    if(password !== rePass){
      this.errorMessage = 'Passwords missmatch!'
    }
    try {
      await this.userService.register(email, password, rePass)
    } catch (error: any) {
      if(error.code === 'auth/email-already-in-use'){
        this.errorMessage = 'Email already in use!'
        this.isLoading = false
      } else {
        this.errorMessage = 'An error occurred while registering!'
        this.isLoading = false
      }
    }
      
    }
  }
