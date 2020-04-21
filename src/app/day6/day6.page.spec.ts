import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day6Page } from './day6.page';

describe('Day6Page', () => {
  let component: Day6Page;
  let fixture: ComponentFixture<Day6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
