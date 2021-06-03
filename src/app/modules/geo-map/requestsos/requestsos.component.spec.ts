import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsosComponent } from './requestsos.component';

describe('RequestsosComponent', () => {
  let component: RequestsosComponent;
  let fixture: ComponentFixture<RequestsosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
