
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2';
  private url:string='https://api.giphy.com/v1/gifs'

  constructor(
    private http:HttpClient
  ) { }

  get getTagsHistory() {
    return [...this._tagsHistory];
  }

  private historyTag(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.historyTag(tag);
    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit','2')
    this.http.get(`${this.url}/search`,{params})
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
