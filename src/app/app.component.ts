import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhoIAmComponent } from './components/who-iam/who-iam.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoIAmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioWeb';
}
