import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/carType';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  car: any = {};

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['carId'];

    this.apiService.getCar(id).subscribe((car: Car) => {
      this.car = car;
    });
  }

  submitEditForm(form: NgForm) {
    try {
      const data = form.value;
      const id = this.activatedRoute.snapshot.params['carId'];

      const headers = {
        'Content-Type': 'application/json'
      };

      this.httpClient
        .put(`https://carz-67158-default-rtdb.europe-west1.firebasedatabase.app/Cars/${id}.json`, data, { headers })
        .subscribe(() => {
          form.reset();
          this.router.navigate(['cars', id]);
        });
    } catch (error) {
      console.log('Error editing car', error);
    }
  }
}
