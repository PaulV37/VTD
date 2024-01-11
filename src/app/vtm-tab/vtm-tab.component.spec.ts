import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtmTabComponent } from './vtm-tab.component';

describe('VtmTabComponent', () => {
  let component: VtmTabComponent;
  let fixture: ComponentFixture<VtmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VtmTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
