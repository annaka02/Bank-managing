import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../Model/request';
import { RequestService } from '../Service/request.service';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  request : Request = new Request();
  constructor(private rs : RequestService, private router : Router) { }

  ngOnInit(): void {
  }
  public saveDeposit(){
    this.rs.addRequest(this.request).subscribe((response) => {
      alert("Saved Successfully");
      this.router.navigate(['/request']);
      console.log(response);
    })
    
  }

}
