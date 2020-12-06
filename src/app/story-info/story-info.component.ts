import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../types/item'

@Component({
  selector: 'app-story-info',
  templateUrl: './story-info.component.html',
  styleUrls: ['./story-info.component.css']
})
export class StoryInfoComponent {
  @Input() item: Item;

  constructor() { }

  get hostname() {
    return this.item.url && new URL(this.item.url).hostname
  }

}
