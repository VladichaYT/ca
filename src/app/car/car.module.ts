import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCarComponent } from './current-car/current-car.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarRoutingModule } from './car-routing.module';
import { FormsModule } from '@angular/forms';
import { EditCarComponent } from './edit-car/edit-car.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CurrentCarComponent,
    NewCarComponent,
    EditCarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule,
    SharedModule
  ]
})
export class CarModule { }
