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
  story: Item;

  constructor(private storyService: StoryService,) { }

  ngOnInit(): void {
    this.storyService.getItem(this.id).subscribe((data)=>{
      this.story = data
    })
  }

}
