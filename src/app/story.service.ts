import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {Item} from './types/item'

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) {}

  getNewStories() {
    return this.http.get(` https://hacker-news.firebaseio.com/v0/topstories.json`);
  }

  getItem(id: string) {
    return this.http.get<Item>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  }
}
