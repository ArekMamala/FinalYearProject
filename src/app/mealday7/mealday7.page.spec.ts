import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday7Page } from './mealday7.page';

describe('Mealday7Page', () => {
  let component: Mealday7Page;
  let fixture: ComponentFixture<Mealday7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
