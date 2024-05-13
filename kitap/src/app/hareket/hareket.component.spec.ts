import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HareketComponent } from './hareket.component';

describe('HareketComponent', () => {
  let component: HareketComponent;
  let fixture: ComponentFixture<HareketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HareketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
