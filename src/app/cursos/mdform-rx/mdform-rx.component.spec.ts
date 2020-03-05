import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdformRxComponent } from './mdform-rx.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MdformRxComponent', () => {
  let component: MdformRxComponent;
  let fixture: ComponentFixture<MdformRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdformRxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdformRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
