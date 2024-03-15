import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  show: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  log = {
    username: '',
    password: '',
    email: ''
  }

  register() {
    if (this.log.username.length > 0 && this.log.password.length > 0 && this.log.email.length > 0) {
      this.auth.reg(this.log).subscribe(data => {
        console.log(data);
        localStorage.setItem('token1', JSON.stringify(data));
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      })
    }
  }

  login() {
    if (this.log.password.length > 0 && this.log.email.length > 0) {
      this.auth.login(this.log).subscribe(user => {
        console.log(user);
        localStorage.setItem('token1', JSON.stringify(user));
        this.router.navigate(['']);
      }, error => {
        console.log(error);
      });
    }
  }



}
