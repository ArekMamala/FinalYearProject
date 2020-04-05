import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealsPage } from './meals.page';

describe('MealsPage', () => {
  let component: MealsPage;
  let fixture: ComponentFixture<MealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
