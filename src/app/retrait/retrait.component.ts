import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../Service/request.service';
import { Request } from '../Model/request';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  request : Request = new Request();
  constructor(private rs : RequestService, private router : Router) { }

  ngOnInit(): void {
  }
  public saveRetrait(){
    this.rs.addRequest(this.request).subscribe((response) => {
      alert("Saved Successfully");
      this.router.navigate(['/request']);
      console.log(response);
    })
    
  }
}
