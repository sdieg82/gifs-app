import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsAppComponent } from "./gifs/gifs-app.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GifsAppComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
