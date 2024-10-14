import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../services/gifs-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(
    private searchService:GifsServiceService
  ){}
  
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>

  searchTag():void{
    const newTag=this.tagInput.nativeElement.value
    this.searchService.searchTag(newTag)
    this.tagInput.nativeElement.value=''
  }
}
