import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userInfo: any;
  
  loginObj: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private dataService: UserdataService){
    this.userInfo = this.dataService.getObject();
   }

  ngOnInit(): void {
  }
  onCancel(){
    this.router.navigate(['/']);
  }
  
  onLogin(){
    const userInfo = this.dataService.getObject();
    if (this.loginObj.email && this.loginObj.password){
      this.dataService.setObject(this.userInfo);
      this.router.navigate(['/profile'], { state: { object: this.userInfo } })
  }
  else{
    alert('Enter both Email and Password !')
  }
  
}
}
