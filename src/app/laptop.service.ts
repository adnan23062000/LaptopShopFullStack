import { Injectable } from '@angular/core';
import { laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  laptopToView=new laptop();
  setViewLaptop(givenlaptop: laptop) {
    this.laptopToView = givenlaptop;
  }

  getViewLaptop(): laptop{
    return JSON.parse(JSON.stringify(this.laptopToView));
  }
  addlaptop(newlaptop: laptop) {
    let id = Math.floor((Math.random() * 100000) + 1);
    newlaptop.id = id;
    this.laptops.push(newlaptop);
  
  }
  laptops: laptop[] = [
    {id: 1, name: "AVITA Essential 14", ram: "4GB LPDDR4 RAM", ssd:"256GB  SSD",price:"$29100",display:"14 FHD (1920 x 1080) IPS Display",image:"..\\..\\assets\\avita14.jpg"},
    {id: 2, name: "Chuwi HeroBook Pro ", ram: "8GB LPDDR4 RAM", ssd:"256GB SSD",price:"$29400",display:"14.1 Inch(1920 x 1080) IPS Anti-Glare Display",image:"..\\..\\assets\\chuwi.jpg"},
    {id: 3, name: "HP 15s-du1115TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 HDD",price:"$33200",display:"15.6 HD (1366 x 768) Display",image:"..\\..\\assets\\Hp15s.jpg"},
    {id: 4, name: "HP 15s-du1114TU", ram: "4 GB DDR4 RAM", ssd:"1 TB 5400 HDD",price:"$33200",display:"15.6 HD (1366 x 768) Display",image:"..\\..\\assets\\Hpdu14.jpg"},
    {id: 5, name: "Dell Inspiron 15", ram: "4GB DDR4 RAM", ssd:"1TB HDD",price:"$45500",display:"15.6 FHD(1920x1080) Display",image:"..\\..\\assets\\dellins.jpg"},
    {id: 6, name: "Lenovo ThinkPad E14 ", ram: "4GB DDR4 RAM", ssd:"512GB SSD",price:"$66000",display:"14 FHD (1920 x 1080) IPS Display",image:"..\\..\\assets\\thinkpad.jpg"},
    {id: 7, name: "Asus Vivobook X515MA ", ram: " 4GB DDR4 RAM", ssd:"1TB 5400RPM HDD",price:"$35500",display:"14 FHD (1920 x 1080) IPS Display",image:"..\\..\\assets\\vivobook.jpg"},
    {id: 8, name: "Lenovo IdeaPad Slim 3i ", ram: "4GB DDR4 RAM", ssd:"256GB SSD",price:"$35800",display:"15.6″ HD (1366×768)",image:"..\\..\\assets\\ideapad.jpg"},
    {id: 9, name: "Lenovo IdeaPad Slim 3i ", ram: " 4GB DDR4 RAM", ssd:"1TB HDD",price:"$34800",display:"15.6″ HD (1366×768)",image:"..\\..\\assets\\ideapadslim.jpg"},
   
  ];
  constructor() {
   
   }
   getlaptops(): laptop[] {
    return this.laptops;
}
deleteLaptop(givenlaptop: laptop): laptop[] {
  this.laptops = this.laptops.filter(laptop => laptop.id != givenlaptop.id);
  return this.laptops;
}

}