import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarService } from "../services/car.service";
import { Car } from '../models/car';

@Injectable ({
  providedIn: 'root'
})

export class UpdateCarUseCase {
  constructor(private carService: CarService) {}

  run(id: number, Car: Car): Observable<void> {
    return this.carService.updateCar(id, Car)
  }
}
