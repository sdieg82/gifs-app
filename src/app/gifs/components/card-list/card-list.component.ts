import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gif.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs:Gif[]=[];

}
