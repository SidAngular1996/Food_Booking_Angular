import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { BuffetBookingService } from './buffet-booking.service';

@Component({
  selector: 'app-buffet-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class BuffetBookingComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  buffetBookingForm: FormGroup;
  constructor(private fb: FormBuilder, private buffetBookingService: BuffetBookingService) { }



  ngOnInit() {
    this.buffetBookingForm=this.fb.group({
      buffetName:['', Validators.required],
      emailId :['', [Validators.required, validateEmail]],
      plateCount :['',[Validators.required, Validators.min(6)]],
      bookedOn:['', [Validators.required,validateDate]]

    })
  }

  bookBuffet(){
    this.errorMessage = null;
    this.successMessage = null;
    this.buffetBookingService.bookBuffet(this.buffetBookingForm.value).subscribe(
      (response)=>{this.successMessage=response.message;console.log("Message: ",this.successMessage)},
      (errorResponse)=>this.errorMessage=errorResponse.error.message,
    )
  }

}

function validateEmail(c:FormControl){
  let emailRegex=/^[\w._]+@[A-Za-z]+\.(com|co\.in\org)$/
  return emailRegex.test(c.value)? null:{emailError:{message: "Invalid email"}}
}

function validateDate(d:FormControl){
  var change= new Date(d.value)
  var today= new Date()
  if(change.getTime()<today.getTime()){
    return{dateError:{message:"Date can not be before today"}}
  }
}