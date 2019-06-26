import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogMainComponent } from './dog-main.component';

describe('DogMainComponent', () => {
  let component: DogMainComponent;
  let fixture: ComponentFixture<DogMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
