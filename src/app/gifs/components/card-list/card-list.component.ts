import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gif.interfaces';
import { CommonModule } from '@angular/common';
import { GifLoaderComponent } from "../gif-loader/gif-loader.component";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, GifLoaderComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs:Gif[]=[];

}
