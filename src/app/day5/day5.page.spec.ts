import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day5Page } from './day5.page';

describe('Day5Page', () => {
  let component: Day5Page;
  let fixture: ComponentFixture<Day5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
