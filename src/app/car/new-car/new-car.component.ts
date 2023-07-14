import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {
  car: any = {};

  constructor(private httpClient: HttpClient, private router: Router) { }

  
  
  submitForm(form: NgForm) {
    try {
      const data = form.value;
      
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
