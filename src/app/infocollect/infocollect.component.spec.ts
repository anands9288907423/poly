import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocollectComponent } from './infocollect.component';

describe('InfocollectComponent', () => {
  let component: InfocollectComponent;
  let fixture: ComponentFixture<InfocollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
