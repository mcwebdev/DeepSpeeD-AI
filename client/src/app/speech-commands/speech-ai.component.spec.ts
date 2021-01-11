import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechAIComponent } from './speech-ai.component';

describe('SpeechAIComponent', () => {
  let component: SpeechAIComponent;
  let fixture: ComponentFixture<SpeechAIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechAIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
