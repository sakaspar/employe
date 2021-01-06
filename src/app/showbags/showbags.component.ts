import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import{BagService} from '../services/bag.service';
import{bag} from '../entities/bag';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-showbags',
  templateUrl: './showbags.component.html',
  styleUrls: ['./showbags.component.css']
})
export class ShowbagsComponent implements OnInit {


   
  Bags!: Observable<bag[]>;
  

  constructor(private BagService: BagService, 
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    
  } 
  reloadData(){
    this.Bags = this.BagService.getBagsList();
  }
 deleteBag (compagnieId:number)
 {console.log("hfdgdfgd",compagnieId);
   this.BagService.CheckoutEmp(compagnieId).subscribe(
     data=>{
       console.log(data);
       this.reloadData();
     },
     error=> console.log(error));
   
 }
 detBag (compagnieId:number)
 {
   console.log("hfdgdfgd",compagnieId);
 
 /*  this.BagService.CheckoutEmp(compagnieId).subscribe(
    data=>{
       console.log(data);
       this.reloadData();

     },
     error=> console.log(error));
   */
  this.router.navigateByUrl("/Checkout");
  
 }
 /* BagDetails(compagnieId:number)
 {
   this.router.navigate(['details', compagnieId]);
 }*/
}