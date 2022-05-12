import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavButtonListComponent } from './sidenav-button-list.component';

describe('SidenavButtonListComponent', () => {
  let component: SidenavButtonListComponent;
  let fixture: ComponentFixture<SidenavButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
