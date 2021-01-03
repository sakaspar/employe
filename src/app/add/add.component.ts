import { Component, OnInit } from '@angular/core';
import{EmployeService} from '../services/employe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: any = {};
  constructor(
    private emp :EmployeService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log('clicked')
    this.emp.addEmp(this.form).subscribe(  data =>{console.log(data)
        
    })
    
    }

  }

