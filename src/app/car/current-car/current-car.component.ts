import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/carType';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.css']
})
export class CurrentCarComponent implements OnInit {
  car: any
  id: any
  uid = ''
  isLoading: boolean = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCar()
    if(localStorage.getItem('user')) {
      const currentUser = JSON.parse(localStorage.getItem('user') || '')      
      const uid = currentUser?.uid
      this.uid = uid
    }

  }

  fetchCar() {
    const id = this.activatedRoute.snapshot.params['carId'];
    this.apiService.getCar(id).subscribe((car: Car) => {
      this.car = car;
      this.id = id
      this.isLoading = false 
    });
    
  }

  deleteCar() {
    const id = this.activatedRoute.snapshot.params['carId'];
    if(confirm('Are you sure you want to delete this car?') ) this.apiService.deleteCarById(id).subscribe(); return false
  }
}
