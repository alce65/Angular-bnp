import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular-Bnp'`, () => {
    expect(component.title).toEqual('Curso de Angular');
  });

  it('should render title', () => {
    /* const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); */
    const rendered = fixture.nativeElement;
    expect(rendered.querySelector('h1').textContent).toContain('Angular');
  });
});
