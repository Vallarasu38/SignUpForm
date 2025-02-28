import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone:false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User Signed Up:', this.user);
    alert('Signup Successful!');
  }
}
