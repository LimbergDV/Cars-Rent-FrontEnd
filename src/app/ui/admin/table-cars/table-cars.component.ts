import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Car } from '../../../core/cars/models/car';
import { GetCarsUseCase } from '../../../core/cars/use-cases/get-allCars.use_case';
import { DeleteCarUseCase } from '../../../core/cars/use-cases/delete-car.use_case';
import { UpdateCarUseCase } from '../../../core/cars/use-cases/update-car.use_case';

@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  styleUrls: ['./table-cars.component.css']
})
export class TableCarsComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car | null = null;

  constructor(
    private getCarsUseCase: GetCarsUseCase,
    private deleteCarUseCase: DeleteCarUseCase,
    private updateCarUseCase: UpdateCarUseCase,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtainCars();
  }

  obtainCars(): void {
    this.getCarsUseCase.run().subscribe(
      (response) => {
        console.log("Coches recibidos:", response);
        this.cars = response;
      },
      (err) => {
        console.error("Error al obtener coches:", err);
      }
    );
  }

  selectCar(car: Car) {
    console.log("Se hizo click en el botón");
    this.selectedCar = {...car};
    console.log("Coche seleccionado", this.selectedCar);
  }

  updateCar() {
    if (this.selectedCar && this.selectedCar.Id) { // Cambiado de id_car a Id
      this.selectedCar.Price_day = Number(this.selectedCar.Price_day);
      this.selectedCar.Year = Number(this.selectedCar.Year);
      this.updateCarUseCase.run(this.selectedCar.Id, this.selectedCar).subscribe(() => { // Cambiado de id_car a Id
        this.obtainCars();
        this.selectedCar = null;
      });
    }
  }

  deleteCar(id: number) {
    if(id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5DFF34',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        color: 'black',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCarUseCase.run(id).subscribe(
            (response) => {
              Swal.fire(
                'Eliminado!',
                'El coche ha sido eliminado.',
                'success'
              );
              this.obtainCars();
            },
            (error) => {
              Swal.fire(
                'Error!',
                'Hubo un problema al eliminar el coche.',
                'error'
              );
            }
          );
        }
      });
    } else {
      console.error('ID del coche es indefinido');
    }
  }
}
