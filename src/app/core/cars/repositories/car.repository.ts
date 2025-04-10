import { Observable } from 'rxjs';
import { Car } from '../models/car';


export abstract class CarRepository {
    abstract getCars(): Observable<Car[]>;
    abstract addCar(Car: Car): Observable<void>;
    abstract deleteCar(id: number): Observable<void>;
    abstract updateCar(id: number, Car: Car): Observable<void>;
    abstract getCarById(id: number): Observable<Car>
}
