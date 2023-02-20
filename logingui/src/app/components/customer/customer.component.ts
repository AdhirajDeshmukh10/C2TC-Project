import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
  }

  data={
    customer_id:"",
    customername:"",
    customer_email:"",
	  phone_no:""
  }

  constructor(private customer:BackendService,private snack:MatSnackBar){}

  doSubmit(){
    console.log("try to submit");
    console.log("DATA",this.data);
    
    if (this.data.customername==""||this.data.customer_email==""||this.data.phone_no==""){
      this.snack.open("fields cannot be empty !!","ok")
     return;
    }

    this.customer.addCustomer(this.data).subscribe(
      responce=>{
        console.log(responce);  
      },
      error=>{
        console.log(error);
        
  }) 
  }
}
