
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  
  public gifList:Gif[]=[]
  
  private _tagsHistory: string[] = [];
  private apiKey: string = 'gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2';
  private url:string='https://api.giphy.com/v1/gifs'

  constructor(
    private http:HttpClient
  ) {
    this.readLocalStorage();
  }

  get getTagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory))
  }
  private readLocalStorage() {
    if (typeof window !== 'undefined' && localStorage.getItem('history')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }
  }
  private historyTag(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage()
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.historyTag(tag);
    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit','10')
    this.http.get<SearchResponse>(`${this.url}/search`,{params})
      .subscribe(resp=>{
        this.gifList=resp.data
        console.log({gif : this.gifList})
      });
  }
}
