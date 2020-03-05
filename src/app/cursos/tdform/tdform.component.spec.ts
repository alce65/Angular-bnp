import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdformComponent } from './tdform.component';
import { FormsModule } from '@angular/forms';

describe('TdformComponent', () => {
  let component: TdformComponent;
  let fixture: ComponentFixture<TdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdformComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
