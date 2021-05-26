import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteleriaComponent } from './hoteleria.component';

describe('HoteleriaComponent', () => {
  let component: HoteleriaComponent;
  let fixture: ComponentFixture<HoteleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
