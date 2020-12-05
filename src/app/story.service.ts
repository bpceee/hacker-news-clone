import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {Item} from './types/item'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) {}

  getStoryIds(type: string) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/${type}stories.json`) as Observable<string[]>;
  }

  getItem(id: number) {
    return this.http.get<Item>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`) as Observable<Item>;
  }
}
