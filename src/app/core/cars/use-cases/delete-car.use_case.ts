import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarService } from "../services/car.service";


@Injectable ({
  providedIn: 'root'
})

export class DeleteCarUseCase {
  constructor(private carService: CarService) {}

  run(id: number): Observable<void> {
    return this.carService.deleteCar(id)
  }
}
