import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private apiUrl= 'http://localhost:8081/customers/'

  constructor(private http: HttpClient) { }

  getRents(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
