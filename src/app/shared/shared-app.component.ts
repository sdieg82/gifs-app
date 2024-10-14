import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-shared-app',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './shared-app.component.html',
  styleUrl: './shared-app.component.css'
})
export class SharedAppComponent {

}
