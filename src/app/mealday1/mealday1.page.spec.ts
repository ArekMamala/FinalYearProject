import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday1Page } from './mealday1.page';

describe('Mealday1Page', () => {
  let component: Mealday1Page;
  let fixture: ComponentFixture<Mealday1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
