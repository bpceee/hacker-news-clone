import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) {}

  getNewStories() {
    return this.http.get(` https://hacker-news.firebaseio.com/v0/topstories.json`);
  }
}