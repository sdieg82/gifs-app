import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../interfaces/gif.interfaces';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from "../../../shared/components/lazy-image/lazy-image.component";

@Component({
  selector: 'app-gif-loader',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
  templateUrl: './gif-loader.component.html',
  styleUrl: './gif-loader.component.css',
})
export class GifLoaderComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif)throw new Error('Gif property is required')
  }
}
