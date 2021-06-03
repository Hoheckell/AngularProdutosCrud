import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaosaobraComponent } from './maosaobra.component';

describe('MaosaobraComponent', () => {
  let component: MaosaobraComponent;
  let fixture: ComponentFixture<MaosaobraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaosaobraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaosaobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
