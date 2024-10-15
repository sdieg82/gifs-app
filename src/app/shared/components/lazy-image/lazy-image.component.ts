import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  
  @Input()
  public url!:string
  
  @Input()
  public alt:string=''
  

  public hasLoaded:boolean=false

  ngOnInit(): void {
    if(!this.url) throw new Error('URL is required');
  }

  onLoad(){
    console.log('Imagen cargada')
    this.hasLoaded=true
  }
}
