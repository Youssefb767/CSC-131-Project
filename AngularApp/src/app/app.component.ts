import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
=======

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
>>>>>>> 2a1807fca0420bb441aacd6b497aace8e5289562
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
}