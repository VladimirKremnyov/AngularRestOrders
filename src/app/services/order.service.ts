import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/Order';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}

@Injectable()
export class OrderService {

  ordersUrl: string = 'http://localhost:8080/orders';
  orderedOrdersUrl: string = 'http://localhost:8080/ordersOrderedByManagerName';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  getOrdersOrderedByName(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderedOrdersUrl);
  }

}
