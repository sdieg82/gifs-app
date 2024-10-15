import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from "../../components/card-list/card-list.component";
import { CommonModule } from '@angular/common';
import { GifsServiceService } from '../../services/gifs-service.service';
import { Gif } from '../../../interfaces/gif.interfaces';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(
    private gifService:GifsServiceService
  ){}
  get gifs():Gif[]{
    return this.gifService.gifList;
  }
}
