import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUser: any[] =[]
  signupObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    pwd: '',
  };

  constructor(private router: Router, private dataservice: UserdataService) { }

  sendObject() {
    this.dataservice.setObject(this.signupUser);
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }
  onSignUp(){
    if (this.signupObj.firstName && this.signupObj.lastName && this.signupObj.email && 
      this.signupObj.phone && this.signupObj.pwd && this.signupObj.dob){

    const isUserExist = this.signupUser.find(m => m.email == this.signupObj.email);
    
    if(isUserExist == undefined){

      this.signupUser.push(this.signupObj)
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUser));
      this.signupObj = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        pwd: '',
    }
  }
    else{
       alert('User Already Exists');
     } 
    }
     else{
      alert('Please fill all the fields');
     }
    };

  onCancel(){
    this.router.navigate(['/']); 
  }

  
}

