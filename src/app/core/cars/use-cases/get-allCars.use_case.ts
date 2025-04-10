import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarService } from "../services/car.service";
import { Car } from "../models/car";

@Injectable ({
  providedIn: 'root'
})

export class GetCarsUseCase {
  constructor(private carService: CarService) {}

  run(): Observable<Car[]> {
    return this.carService.getCars()
  }
}
