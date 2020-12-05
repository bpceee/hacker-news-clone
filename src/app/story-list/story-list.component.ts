import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import {mergeMap} from 'rxjs/operators'

import { StoryService } from "../story.service";

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  storyIds: Observable<string[]>

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.storyIds = this.route.data.pipe(
      mergeMap(data => this.storyService.getStoryIds(data.type)
    ))
  }

}
