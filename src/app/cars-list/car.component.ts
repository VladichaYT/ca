import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { Car } from '../types/carType';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carsList: Car[] = [];
  carId: any
  isLoading: boolean = true
  
  constructor(private database: Database) {}

  ngOnInit(): void {
    const databaseRef = ref(this.database, 'Cars');
    onValue(databaseRef, (snapshot) => {
      this.carsList = Object.values(snapshot.val())
      this.carId = Object.keys(snapshot.val())
      this.isLoading = false      
    });
  }
}
