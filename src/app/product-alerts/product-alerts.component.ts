import { Output, EventEmitter, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Input() test;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  } 

}