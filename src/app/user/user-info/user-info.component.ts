import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: any;
  cars: any[] = [];

  constructor(private userService: UserService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe(user => {
      this.user = user;
      
      this.apiService.getCarsByOwnerId(this.user?.uid).subscribe(carsObj => {
        this.cars = Object.keys(carsObj).map(key => carsObj[key]);
      });
    });
  }

  passwordReset() {
    try {
      this.userService.firebaseAuth.sendPasswordResetEmail(this.user.email);
      alert('Check your email!');
    } catch (error) {
      console.log(error);
    }
  }
}
  