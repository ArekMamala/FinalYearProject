import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day1Page } from './day1.page';

describe('Day1Page', () => {
  let component: Day1Page;
  let fixture: ComponentFixture<Day1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
