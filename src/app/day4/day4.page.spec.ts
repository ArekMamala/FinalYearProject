import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day4Page } from './day4.page';

describe('Day4Page', () => {
  let component: Day4Page;
  let fixture: ComponentFixture<Day4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
