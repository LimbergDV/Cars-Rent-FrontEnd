import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarService } from "../services/car.service";
import { Car } from "../models/car";

@Injectable ({
  providedIn: 'root'
})

export class AddCarUseCase {
  constructor(private CarService: CarService) {}

  run(Car: Car): Observable<void> {
    return this.CarService.addCar(Car)
  }
}
