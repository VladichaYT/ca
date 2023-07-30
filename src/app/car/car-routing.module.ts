import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { CurrentCarComponent } from './current-car/current-car.component';
import { NewCarComponent } from './new-car/new-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { AuthActivation } from '../core/guards/auth.guard';
import { NotFoundComponent } from '../not-found/not-found.component';

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
      },
    ]
  },
  {
    path: 'add-car',
    component: NewCarComponent,
    canActivate: [AuthActivation]
  },
  {
    path: 'edit',
    canActivate: [AuthActivation],
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
    ],
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}
