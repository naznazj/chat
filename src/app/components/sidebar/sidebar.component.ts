import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

  export class SidebarComponent implements OnInit {
    isCollapsed: boolean;
  
    constructor(private router: Router) {
      // Retrieve the saved sidebar state from local storage on initialization
      const savedState = localStorage.getItem('sidebarState');
      this.isCollapsed = savedState ? JSON.parse(savedState) : false;
    }
  
    ngOnInit(): void {
      // Optionally, you can listen to route changes to handle other side effects.
      this.router.events.subscribe(() => {
        // Keep the sidebar state intact across route changes
      });
    }

  logout(): void {
    // Clear the login state from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
  
    toggleSidebar(): void {
      this.isCollapsed = !this.isCollapsed;
      // Save the updated state to local storage
      localStorage.setItem('sidebarState', JSON.stringify(this.isCollapsed));
    }
  }

