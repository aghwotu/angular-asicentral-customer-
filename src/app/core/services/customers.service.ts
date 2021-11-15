import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    const customersUrl = '../../../assets/json/customers.json';
    return this.http.get(customersUrl).pipe(
      map((response) => {
        const data = response as Array<any>;
        return data;
      })
    );
  }
}
