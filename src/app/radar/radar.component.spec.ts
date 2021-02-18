import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarComponent } from './radar.component';

describe('RadarComponent', () => {
  let component: RadarComponent;
  let fixture: ComponentFixture<RadarComponent>;
  let btn: HTMLElement;
  let span: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarComponent);
    component = fixture.componentInstance;
    btn = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle lightState', () => {
    expect(component.lightState).toBe(false, 'off at first');
    btn.click();
    fixture.detectChanges();
    expect(component.lightState).toBe(true, 'on after btn click');
    btn.click();
    fixture.detectChanges();
    expect(component.lightState).toBe(false, 'off again');
  });
});
