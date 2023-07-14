import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/carType';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.css']
})
export class CurrentCarComponent implements OnInit {
  car: any;
  id: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchCar();
  }

  fetchCar() {
    const id = this.activatedRoute.snapshot.params['carId'];
    this.apiService.getCar(id).subscribe((car: Car) => {
      this.car = car;
      this.id = id
    });
  }

  deleteCar() {
    const id = this.activatedRoute.snapshot.params['carId'];
    if(confirm('Are you sure you want to delete this car?') ) this.apiService.deleteCarById(id).subscribe(); return false
  }
}
