import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday6Page } from './mealday6.page';

describe('Mealday6Page', () => {
  let component: Mealday6Page;
  let fixture: ComponentFixture<Mealday6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
