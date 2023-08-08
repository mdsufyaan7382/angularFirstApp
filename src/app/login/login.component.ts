import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string='';
  password: string='';

  login() {
    // Replace this with actual authentication logic
    if (this.userID === 'yourUsername' && this.password === 'yourPassword') {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }

}
