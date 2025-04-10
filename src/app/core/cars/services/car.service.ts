import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarRepository } from '../repositories/car.repository';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService extends CarRepository{
  private apiUrl = 'http://localhost:8084/cars/'

  constructor(private http: HttpClient) {
    super();
  }

  getCars(): Observable<Car[]> {
    return this.http.get<{Carros: Car[]}>(this.apiUrl).pipe(
      map(response => response.Carros) // Ahora usa "Carros" que es como viene en la respuesta
    );
  }

  addCar(Car: Car): Observable<void> {
    return this.http.post<void>(this.apiUrl, Car);
  }

  deleteCar(id: number): Observable<void>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<void>(url);
  }

  updateCar(id: number, Car: Car): Observable<void>{
    const url = `${this.apiUrl}${id}`;
    return this.http.put<void>(url, Car);
  }

  getCarById(id: number): Observable<Car>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Car>(url);
  }
}
