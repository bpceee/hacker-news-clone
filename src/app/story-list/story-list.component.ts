import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators'

import { StoryService } from "../story.service";

const PAGE_SIZE = 30
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  storyIds$: Observable<string[]>
  curPage = 0
  startIdx = 0
  endIdx = PAGE_SIZE

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      const pageNum = parseInt(params.get('p'))
      if (!isNaN(pageNum)) {
        this.curPage = pageNum
        this.startIdx = pageNum * PAGE_SIZE
        this.endIdx = this.startIdx + PAGE_SIZE
      } else {
        this.curPage = 0
        this.startIdx = 0
        this.endIdx = PAGE_SIZE
      }
    })

    this.storyIds$ = this.route.data.pipe(
      mergeMap(data => this.storyService.getStoryIds(data.type)
    ))
  }

}
