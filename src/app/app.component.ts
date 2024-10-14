import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';
import { SearchBoxComponent } from './gifs/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar esto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SidebarComponent,
    HomePageComponent,
    SearchBoxComponent,
    CommonModule,
    HttpClientModule, // Asegúrate de incluir HttpClientModule aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gifs-app';
}
