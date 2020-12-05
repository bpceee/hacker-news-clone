import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryService } from "../story.service";
import {Item} from '../types/item';

@Component({
  selector: 'app-story-list-item',
  templateUrl: './story-list-item.component.html',
  styleUrls: ['./story-list-item.component.css']
})
export class StoryListItemComponent implements OnInit {
  @Input() id: string;
  item$: Observable<Item>;

  constructor(private storyService: StoryService,) { }

  ngOnInit(): void {
    this.item$ = this.storyService.getItem(this.id);
  }

}
