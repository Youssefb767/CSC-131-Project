import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
//>>>>>>> 2a1807fca0420bb441aacd6b497aace8e5289562
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
}