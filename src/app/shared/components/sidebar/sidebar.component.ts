import { Component } from '@angular/core';
import { GifsServiceService } from '../../../gifs/services/gifs-service.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FormsModule,UpperCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(
    private gifsService:GifsServiceService
  ){}
  get tags(){
    return this.gifsService.getTagsHistory
  }

  getGif(name:string):void{
    return this.gifsService.searchTag(name)
  }
 
}
