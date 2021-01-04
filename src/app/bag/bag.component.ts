import { Component, OnInit } from '@angular/core';
import{BagService} from '../services/bag.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  form: any = {};
  constructor(
    private emp :BagService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log('clicked')
    this.emp.addEmp(this.form).subscribe(  data =>{console.log(data)
        
    })
    
    }

  }

