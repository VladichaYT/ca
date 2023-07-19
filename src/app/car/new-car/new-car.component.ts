import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {
  car: any = {};
  isLoading: boolean = false

  constructor(private httpClient: HttpClient, private router: Router) { }

  
  
  submitForm(form: NgForm) {
    this.isLoading = true
    try {
      const data = form.value;
      const currentUser = JSON.parse(localStorage.getItem('user') || '')      
      const uid = currentUser?.uid
      data['ownerId'] = uid
      
      this.httpClient.post("https://carz-67158-default-rtdb.europe-west1.firebasedatabase.app/Cars.json", data)
        .subscribe(() => {
          form.reset()
          this.router.navigate([''])
        });
    } catch (error) {
      console.log('Error adding car', error);
    }
  }
}
