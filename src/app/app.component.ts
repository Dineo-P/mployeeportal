import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


empDetails = [
{name:"Dineo",surname:"Fest", age:28,image:"https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2_1.jpg",position:"Admin"},

{name:"Lebo",surname:"Sekond",age:30,image:"https://th.bing.com/th/id/OIP.s-Ffj1qEIV7pIL6kI_Y-OAHaLC?pid=Api&rs=1",position:"Technician"},

{name:"Den", surname:"Therd",age:28,image:"https://th.bing.com/th/id/OIP.7TG4BObEhlGBaUoFK4chzAHaE7?pid=Api&rs=1",position:"Manager"},

{name:"Lebo",surname:"Ford",age:30,image:"https://th.bing.com/th/id/OIP.tdIN07XYAYa2ljY_zRt58QHaLG?pid=Api&rs=1",position:"Cleaner"},

{name:"Dineo",surname:"Fitty", age:28,image:"https://i.dailymail.co.uk/i/pix/2008/07/03/article-1031126-01D3B45300000578-933_233x423.jpg",position:"Programmer"},

{name:"Sarah",surname:"Sen",age:30,image:"https://th.bing.com/th/id/OIP.1CEC8em40BDz_Byst0C-oAHaDt?pid=Api&w=500&h=250&rs=1",position:"Designer"},

{name:"Dineo", surname:"Eyt",age:28,image:"https://th.bing.com/th/id/OIP.HOjhZDi5VfxMeVDrkJJMWwHaLH?pid=Api&w=500&h=750&rs=1",position:"Consultant"},

{name:"August",surname:"seth",age:30,image:"https://th.bing.com/th/id/OIP.AXQ5oTbGqmDdomP-R52LZwHaEI?pid=Api&rs=1",position:"Clerk"},

{name:"Maria",surname:"Nyn", age:28,image:"https://fthmb.tqn.com/_dXSrAvKf7khERkt2UZpU2PJ6Pw=/5120x3413/filters:fill(auto,1)/smiling-businesswoman-using-laptop-169450970-57475ec05f9b585165e3794b.jpg",position:"Developer"},

{name:"Marry",surname:"Thelast",age:30,image:"https://labs.openviewpartners.com/wp-content/uploads/2015/02/Justin896x504.jpg.png",position:"Analyst"},

  ];
  

}


