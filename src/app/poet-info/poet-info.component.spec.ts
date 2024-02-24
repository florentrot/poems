import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetInfoComponent } from './poet-info.component';

describe('PoetInfoComponent', () => {
  let component: PoetInfoComponent;
  let fixture: ComponentFixture<PoetInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoetInfoComponent]
    });
    fixture = TestBed.createComponent(PoetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
