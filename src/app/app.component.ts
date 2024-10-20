import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // adjust the path as necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Optional, if you want AppComponent to be standalone
  imports: [HeaderComponent] // Import HeaderComponent here
})
export class AppComponent { }
