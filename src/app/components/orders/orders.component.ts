import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input() term: any;
  orders: Order[];
  isGrouped: boolean;
  ordersGroupedByManagerName: Order[];
  ordersTmp: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
    this.orderService.getOrdersOrderedByName().subscribe(ordersGroupedByManagerName => {
      this.ordersGroupedByManagerName = ordersGroupedByManagerName;
    });
    this.isGrouped = false;
  }

  groupByManagerName() {
    this.orders
  }

  

}
