import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _tagsHistory:string[]=[];
  constructor() { }

  get getTagsHistory(){
    return [...this._tagsHistory]
  }

  
  private historyTag(tag:string):void{
    tag=tag.toLowerCase()
    if(this._tagsHistory.includes(tag)){
      
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory=this._tagsHistory.splice(0,10)

  }

  searchTag(tag:string):void{
    if(tag.length===0 )return;
    this.historyTag(tag)
    console.log(this._tagsHistory)
  }

}
