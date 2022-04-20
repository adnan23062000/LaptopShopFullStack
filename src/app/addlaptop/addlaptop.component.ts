import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { laptop } from '../laptop';
import { LaptopService } from '../laptop.service';


@Component({
  selector: 'app-newbook',
  templateUrl: './addlaptop.component.html',
  styleUrls: ['./addlaptop.component.css']
})
export class AddlaptopComponent implements OnInit {
  newlaptop = new laptop();
  constructor(private laptopservice: LaptopService, private router: Router) { }

  ngOnInit(): void {
  }
  url="./assets/avita14.jpg"
  addlaptop(): void {
    console.log(this.newlaptop);
    this.laptopservice.addlaptop(this.newlaptop);
    this.router.navigate(['']);
  }

  // onselectFile(e: { target: { files: Blob[]; }; }){
  //   if(e.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result;
  //     }
  //   }
  // }
}