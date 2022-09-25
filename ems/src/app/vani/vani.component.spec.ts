import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaniComponent } from './vani.component';

describe('VaniComponent', () => {
  let component: VaniComponent;
  let fixture: ComponentFixture<VaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
