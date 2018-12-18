import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedeskComponent } from './homedesk.component';

describe('HomedeskComponent', () => {
  let component: HomedeskComponent;
  let fixture: ComponentFixture<HomedeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







