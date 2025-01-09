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
  selectedAdmin: string = 'IBC'; // Default to IBC

  // Hardcoded credentials
  private credentials: { [key: string]: { username: string; password: string } } = {
    IBC: { username: 'IBCadmin', password: 'IBCadmin' },
    Jet: { username: 'Jetadmin', password: 'Jetadmin' },
    Gis: { username: 'Gisadmin', password: 'Gisadmin' },
  };
  private colorSchemes: { [key: string]: { primary: string; secondary: string; accent: string } } = {
    IBC: { primary: '#000000', secondary: '#FFFFFF', accent: '#FF0305' },
    Jet: { primary: '#000000', secondary: '#FFFFFF', accent: '#FC9802' },
    Gis: { primary: '#1e1e1e', secondary: '#adb4b7', accent: '#ffc641' },
  };
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    const adminType = this.selectedAdmin; // Selected company
    const user = this.credentials[adminType]; // Credentials for the selected company
  
    if (!user) {
      this.errorMessage = `The selected company "${adminType}" does not exist.`; // Catch-all for invalid admin types
      return;
    }
  
    if (this.username === user.username && this.password === user.password) {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('adminType', adminType);
      localStorage.setItem('themeColors', JSON.stringify(this.colorSchemes[adminType]));
  
      // Apply theme colors
      const themeColors = this.colorSchemes[adminType];
      document.documentElement.style.setProperty('--primary-color', themeColors.primary);
      document.documentElement.style.setProperty('--secondary-color', themeColors.secondary);
      document.documentElement.style.setProperty('--accent-color', themeColors.accent);
  
      this.router.navigate(['/dashboard']);
    } else {
      // Provide detailed error message
      if (this.username !== user.username) {
        this.errorMessage = `The username "${this.username}" is not registered for the company "${adminType}".`;
      } else if (this.password !== user.password) {
        this.errorMessage = `The password you entered is incorrect for the company "${adminType}".`;
      } else {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    }
  }
  
  
  // Change theme based on admin type
  changeTheme(adminType: string): void {
    this.selectedAdmin = adminType;
    const themeColors = this.colorSchemes[adminType];
    document.documentElement.style.setProperty('--primary-color', themeColors.primary);
    document.documentElement.style.setProperty('--secondary-color', themeColors.secondary);
    document.documentElement.style.setProperty('--accent-color', themeColors.accent);
  }
}
