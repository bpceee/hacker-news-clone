import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../types/item'

@Component({
  selector: 'app-story-info',
  templateUrl: './story-info.component.html',
  styleUrls: ['./story-info.component.css']
})
export class StoryInfoComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
