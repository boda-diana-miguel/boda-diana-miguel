import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFormComponent } from './google-form.component';

describe('GoogleFormComponent', () => {
  let component: GoogleFormComponent;
  let fixture: ComponentFixture<GoogleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleFormComponent]
    });
    fixture = TestBed.createComponent(GoogleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
