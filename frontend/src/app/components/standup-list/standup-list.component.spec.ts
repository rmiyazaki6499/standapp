import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupListComponent } from './standup-list.component';

describe('StandupListComponent', () => {
  let component: StandupListComponent;
  let fixture: ComponentFixture<StandupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
