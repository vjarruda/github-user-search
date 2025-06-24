import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = '';

  constructor(private router: Router) {}

  searchUser() {
    if (this.username.trim()) {
      console.log(this.username)
      this.router.navigate(['/profile', this.username]);
    }
  }
}
