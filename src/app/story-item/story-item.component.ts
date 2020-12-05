import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

import { StoryService } from "../story.service";
import { Item } from '../types/item';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {
  item$: Observable<Item>;
  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.queryParamMap.pipe(
      mergeMap(params => this.storyService.getItem(+params.get("id"))
    ))
  }
}
