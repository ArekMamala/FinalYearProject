import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day2Page } from './day2.page';

describe('Day2Page', () => {
  let component: Day2Page;
  let fixture: ComponentFixture<Day2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
