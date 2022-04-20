import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private laptopservice:LaptopService,private router:Router) { }
  viewlaptop = this.laptopservice.getViewLaptop();

  ngOnInit(): void {
  }

}