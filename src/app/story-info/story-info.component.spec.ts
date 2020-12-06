import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAgoPipe } from '../date-ago.pipe';
import { StoryInfoComponent } from './story-info.component';

describe('StoryInfoComponent', () => {
  let component: StoryInfoComponent;
  let fixture: ComponentFixture<StoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryInfoComponent, DateAgoPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryInfoComponent);
    component = fixture.componentInstance;
    component.item = {
      by: "test author",
      id: 0,
      kids: [1, 2],
      parent: 25316198,
      title: 'test title',
      text: "test text",
      time: 1607188816,
      url: 'https://www.google.com/',
      score: 100,
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('test title');
  });

  it('should render score', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subtext').textContent).toContain('100 points');
  });

  it('should render author', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subtext').textContent).toContain('by test author');
  });
});
