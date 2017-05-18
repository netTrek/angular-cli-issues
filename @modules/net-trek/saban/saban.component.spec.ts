import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabanComponent } from './saban.component';

describe('SabanComponent', () => {
  let component: SabanComponent;
  let fixture: ComponentFixture<SabanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render saban in a p tag', async(() => {
    fixture = TestBed.createComponent(SabanComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('saban works!');
  }));


});
