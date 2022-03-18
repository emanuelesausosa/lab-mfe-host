import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMfeOneComponent } from './lab-mfe-one.component';

describe('LabMfeOneComponent', () => {
  let component: LabMfeOneComponent;
  let fixture: ComponentFixture<LabMfeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMfeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMfeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
