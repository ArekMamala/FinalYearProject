import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday5Page } from './mealday5.page';

describe('Mealday5Page', () => {
  let component: Mealday5Page;
  let fixture: ComponentFixture<Mealday5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
