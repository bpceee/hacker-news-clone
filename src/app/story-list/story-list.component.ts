import { Component, OnInit } from '@angular/core';
import { StoryService } from "../story.service";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories

  constructor(
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.stories = this.storyService.getNewStories();
  }

}
