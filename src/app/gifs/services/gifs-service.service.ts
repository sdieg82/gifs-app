
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'gu3Vy8xgg6kifgQ571WCF1fpduDZQ1X2';

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
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=2`)
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
