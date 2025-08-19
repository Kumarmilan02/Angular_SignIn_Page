import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  isSignUpMode = false;
  isForgotPasswordMode = false;

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  goToRegister(event: Event) {
    event.preventDefault();
    this.isSignUpMode = true;
    this.isForgotPasswordMode = false;
  }

  goToLogin(event: Event) {
    event.preventDefault();
    this.isSignUpMode = false;
    this.isForgotPasswordMode = false;
  }

  openForgotPassword(event: Event) {
    event.preventDefault();
    this.isForgotPasswordMode = true;
  }

  closeForgotPassword(event: Event) {
    event.preventDefault();
    this.isForgotPasswordMode = false;
  }
  isDarkTheme = false;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}

