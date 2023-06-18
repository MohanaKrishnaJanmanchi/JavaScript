import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-signup-app';

  constructor(private router: Router){ }
  onSignUp(){
    this.router.navigate(['/signup']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
}
