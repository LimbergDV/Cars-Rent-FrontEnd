import { Component } from '@angular/core';
import { Car } from '../../../core/cars/models/car';
import { AddCarUseCase } from '../../../core/cars/use-cases/add-car.use_case';
import { Router } from '@angular/router';
import { showSuccessMessage } from '../../helpers/modals/modasl';

@Component({
  selector: 'app-form-cars',
  templateUrl: './form-cars.component.html',
  styleUrl: './form-cars.component.css'
})
export class FormCarsComponent {
  cars: Car[] = [];

  car: Car = {
    Id: 0,
    Brand: '',
    Model: '',
    Year: 0,
    Type_Car: '',
    Plate_number: '',
    Price_day: 0,
		Available: true
  }

  constructor(private createCar: AddCarUseCase, private router: Router){}

  onSubmit(): void {
    if(this.car.Brand && this.car.Model &&this.car.Year && this.car.Type_Car && this.car.Plate_number && this.car.Price_day && this.car.Available) {
      this.createCar.run(this.car).subscribe(
        () => {
          showSuccessMessage('¡Registro exitoso!', 'El producto ha sido registrado correctamente.')
          this.resetForm()
        },
        (error) => {
          console.log('Error al registrar el producto:', error);
        }
      )
    }
  }
  private resetForm(): void {
    this.car = { Id: 0,
      Brand: '',
      Model: '',
      Year: 0,
      Type_Car: '',
      Plate_number: '',
      Price_day: 0,
      Available: true
  }
}

}

