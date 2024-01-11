import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtmNavComponent } from './vtm-nav.component';

describe('VtmNavComponent', () => {
  let component: VtmNavComponent;
  let fixture: ComponentFixture<VtmNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VtmNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
