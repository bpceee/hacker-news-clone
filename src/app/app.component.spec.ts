import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StoryListItemComponent } from './story-list-item/story-list-item.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoryListComponent,
        StoryListItemComponent,
        StoryItemComponent,
        CommentComponent,
        HeaderComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hacker-news-clone'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hacker-news-clone');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header .home').textContent).toContain('Hacker News');
  });
});
