import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day3Page } from './day3.page';

describe('Day3Page', () => {
  let component: Day3Page;
  let fixture: ComponentFixture<Day3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
