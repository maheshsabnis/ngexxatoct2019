import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/app.products';
// HttpClient --> used to make external http calls
// provider get()/post()/put()/delete() method.
// all method returns Observable<T>, T is the Model object
// T can be, string, number, object, array, blob, buffer
// HttpClient must be injected in service ctor
// The HttpClient instance is resolved by HttpClientModule
// this module must be imported by @NgModule

// Observable--> this is the container where responses from HttpClient calls
// will be stored. The data from observble will be dispached to the
// subscriber of the service i.e. Component
// methods of Observable
// subscribe(), map(), pipe(), forkJoin(), method to receive data
// subscibe() --> stream data to subscriber (pack-by-packet)
// map() --> map to the whole response and deliver to receiver
// pipe() --> used for sequential Http Calls and one-by-one receive response
// forkJoin() --> Make parallel calls

// HttpHeaders: The header information in Http calls
// Content-Type, Authorization, any other header information
// In Post and Put calls HttpHeaders are mandatory
// If the REST APIs are secure, then Header information mandatory always

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
  }

  getData(): Observable<Product[]> {
    let response: Observable<Product[]> = null;
    response = this.http.get<Product[]>(this.url);
    return response;
  }

  getDataById(id: number): Observable<Product> {
    let response: Observable<Product> = null;
    response = this.http.get<Product>(`${this.url}/${id}`);
    return response;
  }

  postData(prd: Product): Observable<Product> {
    let response: Observable<Product> = null;
    // define headers info
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.post<Product>(this.url, prd, options);
    return response;
  }

  putData(id: number, prd: Product): Observable<Product> {
    let response: Observable<Product> = null;
    // define headers info
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.put<Product>(`${this.url}/${id}`, prd, options);
    return response;
  }

  deleteData(id: number): Observable<Product> {
    let response: Observable<Product> = null;
    response = this.http.delete<Product>(`${this.url}/${id}`);
    return response;
  }
}
