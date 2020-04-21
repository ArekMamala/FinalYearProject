import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Day7Page } from './day7.page';

describe('Day7Page', () => {
  let component: Day7Page;
  let fixture: ComponentFixture<Day7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Day7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
