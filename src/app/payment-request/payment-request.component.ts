import { Component, OnInit } from '@angular/core';
import { RequestService } from '../Service/request.service';
import { Request } from "../Model/request";

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {

  request : Request[] = [];
  constructor(private rs : RequestService) { }

  ngOnInit(): void {
    this.rs.getAll().subscribe(response => {
      this.request = response;
      console.log(response);
      
    })
  }

}
