import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded username and password
  private credentials = {
    username: 'admin',
    password: 'admin',
  }; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('isLoggedIn'); 
    if (loggedIn === 'true') {
      this.router.navigate(['/dashboard']); 
    }
  }

  login(): void {
    if (this.username === this.credentials.username && this.password === this.credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);  
    } else {
   
      this.errorMessage = 'Invalid username or password';
    }
  }
}
