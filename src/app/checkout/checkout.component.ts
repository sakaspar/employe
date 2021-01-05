import { Component, OnInit } from '@angular/core';
import{BagService} from '../services/bag.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class  CheckoutComponent implements OnInit {

  form: any = {};
  constructor(
    private emp :BagService
  ) { }

  ngOnInit(): void {
    this.form.bagCheck="checkedout"
  }

  onSubmit(){

    console.log('clicked')
    this.emp.addEmp(this.form).subscribe(  data =>{console.log(data)
        
    })
    
    }

  }