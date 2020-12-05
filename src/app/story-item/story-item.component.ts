import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StoryService } from "../story.service";
import {Item} from '../types/item';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {
  story: Item;
  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.storyService.getItem(params.get("id")).subscribe((data)=>{
        this.story = data
      })
    });

  }
}
