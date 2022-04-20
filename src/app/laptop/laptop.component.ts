import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(private laptopservice:LaptopService,private router:Router) { }
  searchString:string = ""; 
  laptops: laptop[] = [];

  ngOnInit(): void {
    this.laptops = this.laptopservice.getlaptops();
  }
  letternum:number=0;
  searchBook(): void {
    if(this.searchString=="") {
      this.laptops = this.laptopservice.getlaptops();
    }
    else {
      this.letternum=this.searchString.length;
      
      this.laptops = this.laptops.filter(laptop => laptop.name.slice(0,this.letternum).toLowerCase() == this.searchString.slice(0,this.letternum).toLowerCase());
      if(this.laptops.length==0) {
        alert("No laptop found");
      }
}}
clearSearch(): void {
  this.searchString = "";
  this.laptops = this.laptopservice.getlaptops();
}
deleteLaptop(givenlaptop: laptop): void{
  this.laptops = this.laptopservice.deleteLaptop(givenlaptop);
}
addlaptop(): void {
  this.router.navigate(['add']);
}
viewlaptop(laptop: laptop){
  console.log(laptop);
  this.laptopservice.setViewLaptop(laptop);
  this.router.navigate(['view']);
}
}