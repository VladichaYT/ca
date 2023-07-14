import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { CurrentCarComponent } from './current-car/current-car.component';
import { NewCarComponent } from './new-car/new-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  {
    path: 'cars',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },
      {
        path: ':carId',
        component: CurrentCarComponent
      }
    ]
  },
  {
    path: 'add-car',
    component: NewCarComponent
  },
  {
    path: 'edit',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent
      },
      {
        path: ':carId',
        component: EditCarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
